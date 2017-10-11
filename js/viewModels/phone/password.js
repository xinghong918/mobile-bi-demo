/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */


define(['ojs/ojcore', 'knockout', 'data/data'],
        function (oj, ko, jsonData)
        {
            /**
             * The view model for the main content view template
             */
            function passwordViewModel() {
                var self = this;
                
				self.oldPassword = ko.observable("")
				self.newPassword = ko.observable("")
				self.confirmPassword = ko.observable("")
				self.showMessage = ko.observable(false);
				self.message = ko.observable("");
				self.messageClass = ko.observable("");

                self.handleActivated = function (info) {
                    
                };

                self.handleAttached = function (info) {
                    
                };
				
				var validate = function() {
					self.message("");
					self.showMessage(false);
					
					
					if (self.oldPassword() == "") {
						self.message("旧密码不能为空！")
						self.showMessage(true)
						self.messageClass("error");
						return false;
					}
					
					if (self.newPassword() == "") {
						self.message("新密码不能为空！")
						self.showMessage(true)
						self.messageClass("error");
						return false;
					}
					
					if (self.newPassword() != self.confirmPassword()) {
						self.message("新密码与确认新密码不同！")
						self.showMessage(true);
						self.messageClass("error");
						return false;
					}
					return true
				}
				
				self.updatePassword = function (event, data) {
					console.log(self.oldPassword())
					var res = validate();
					if (!res) {
						return;
					}
					
					$.ajax({
						url: "http://" + baseUrl + "/user/updatePassword", 
						type: 'post',
						contentType: "application/json",
						dataType: 'json',
						data: JSON.stringify({password: self.oldPassword(), newPassword: self.newPassword(), loginName: sessionStorage.loginName, token: sessionStorage.token}),
						success: function(resp) {
							if (!resp.success) {
								self.message(resp.msg);
								self.messageClass("error");
								self.showMessage(true);
							} else {
								self.message(resp.msg);
								self.messageClass("success");
								self.showMessage(true);
								
								self.oldPassword("");
								self.newPassword("");
								self.confirmPassword("");
							}
						}
					});
					
				}

                self.updateoption = function (event, data)
                {
                    if (data.option == "value") {
                        filterData.year = self.year();
                        filterData.quarter = self.session();
                        filterData.month = self.month();
                        filterData.firstArea = self.firstArea();
                        filterData.secondArea = self.secondArea();
                        filterData.change = self.JYchange();
                    }
                };

            }

            return new passwordViewModel;
        });
