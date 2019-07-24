var app;
(function (app) {
    var bk;
    (function (bk) {
        var api;
        (function (api) {
            var md;
            (function (md) {
                var UserModel = (function () {
                    function UserModel() {
                        if (this.username === undefined)
                            this.username = null;
                        if (this.name === undefined)
                            this.name = null;
                    }
                    UserModel.prototype.getUsername = function () {
                        return this.username;
                    };
                    UserModel.prototype.setUsername = function (username) {
                        this.username = username;
                    };
                    UserModel.prototype.getName = function () {
                        return this.name;
                    };
                    UserModel.prototype.setName = function (name) {
                        this.name = name;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    UserModel.prototype.toString = function () {
                        return "UserModel [username=" + this.username + ", name=" + this.name + "]";
                    };
                    return UserModel;
                }());
                md.UserModel = UserModel;
                UserModel["__class"] = "app.bk.api.md.UserModel";
            })(md = api.md || (api.md = {}));
        })(api = bk.api || (bk.api = {}));
    })(bk = app.bk || (app.bk = {}));
})(app || (app = {}));
(function (app) {
    var bk;
    (function (bk) {
        var api;
        (function (api) {
            var md;
            (function (md) {
                var ResultModel = (function () {
                    function ResultModel(message) {
                        var _this = this;
                        if (((typeof message === 'string') || message === null)) {
                            var __args = arguments;
                            if (this.success === undefined)
                                this.success = false;
                            if (this.message === undefined)
                                this.message = null;
                            if (this.success === undefined)
                                this.success = false;
                            if (this.message === undefined)
                                this.message = null;
                            (function () {
                                _this.success = false;
                                _this.message = message;
                            })();
                        }
                        else if (message === undefined) {
                            var __args = arguments;
                            if (this.success === undefined)
                                this.success = false;
                            if (this.message === undefined)
                                this.message = null;
                            if (this.success === undefined)
                                this.success = false;
                            if (this.message === undefined)
                                this.message = null;
                            (function () {
                                _this.success = true;
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    ResultModel.prototype.isSuccess = function () {
                        return this.success;
                    };
                    ResultModel.prototype.setSuccess = function (success) {
                        this.success = success;
                    };
                    ResultModel.prototype.getMessage = function () {
                        return this.message;
                    };
                    ResultModel.prototype.setMessage = function (message) {
                        this.message = message;
                    };
                    /**
                     *
                     * @return {string}
                     */
                    ResultModel.prototype.toString = function () {
                        return "ResultModel [success=" + this.success + ", message=" + this.message + "]";
                    };
                    return ResultModel;
                }());
                md.ResultModel = ResultModel;
                ResultModel["__class"] = "app.bk.api.md.ResultModel";
            })(md = api.md || (api.md = {}));
        })(api = bk.api || (bk.api = {}));
    })(bk = app.bk || (app.bk = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var st;
        (function (st) {
            var Icons;
            (function (Icons) {
                Icons.USER = "nk-icon fa fa-user";
                Icons.LOCATION = "nk-icon fa fa-map-marker";
                Icons.BARCODE = "nk-icon fa fa-barcode";
                Icons.SEARCH = "nk-icon fa fa-search";
                Icons.DOLLAR = "nk-icon fa fa-usd";
                Icons.REFRESH = "nk-icon fa fa-refresh";
                Icons.TRASH = "nk-icon fa fa-trash";
                Icons.CART = "nk-icon fa fa-shopping-cart";
                Icons.CART_ADD = "nk-icon fa fa-cart-plus";
                Icons.EDIT = "nk-icon fa fa-pencil-square-o";
            })(Icons = st.Icons || (st.Icons = {}));
        })(st = ft.st || (ft.st = {}));
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var vw;
        (function (vw) {
            var LoginView = (function () {
                function LoginView(ui, onClose, userController) {
                    if (this.ui === undefined)
                        this.ui = null;
                    if (this.onClose === undefined)
                        this.onClose = null;
                    if (this.userController === undefined)
                        this.userController = null;
                    this.ui = ui;
                    this.onClose = onClose;
                    this.userController = userController;
                }
                LoginView.prototype.init = function (onLogin) {
                    return this.ui.wrapper().add(this.ui.heading().title("nk ui sample")).add(this.ui.box().add(this.createForm((onLogin))));
                };
                /*private*/ LoginView.prototype.createForm = function (onLogin) {
                    var _this = this;
                    var username = this.ui.input().hint("Username").label("Username");
                    var pw = this.ui.input().hint("Password").label("Password").typePassword();
                    return this.ui.segment().add(this.ui.vertical().add(username).add(pw).add(this.ui.button("Login").primary().click({ call: (function (pw, username) {
                            return function () {
                                _this.userController.login(username.value(), pw.value(), function (result) {
                                    if (result.isSuccess()) {
                                        _this.userController.findByUsername(username.value(), function (user) {
                                            _this.onClose.call();
                                            (function (target) { return (typeof target === 'function') ? target(user) : target.accept(user); })(onLogin);
                                        });
                                    }
                                    else {
                                        username.msg(result.getMessage());
                                    }
                                });
                            };
                        })(pw, username) })));
                };
                return LoginView;
            }());
            vw.LoginView = LoginView;
            LoginView["__class"] = "app.ft.vw.LoginView";
        })(vw = ft.vw || (ft.vw = {}));
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var vw;
        (function (vw) {
            var MainView = (function () {
                function MainView(ui, onClose, userModel) {
                    if (this.ui === undefined)
                        this.ui = null;
                    if (this.onClose === undefined)
                        this.onClose = null;
                    if (this.userModel === undefined)
                        this.userModel = null;
                    this.ui = ui;
                    this.onClose = onClose;
                    this.userModel = userModel;
                }
                MainView.prototype.init = function (onLogout) {
                    var _this = this;
                    return this.ui.wrapper().add(this.ui.heading().title("Welcome, " + this.userModel.getName())).add(this.ui.button("Logout").click({ call: function () {
                            _this.onClose.call();
                            onLogout.call();
                        } }));
                };
                return MainView;
            }());
            vw.MainView = MainView;
            MainView["__class"] = "app.ft.vw.MainView";
        })(vw = ft.vw || (ft.vw = {}));
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var api;
        (function (api) {
            var stub;
            (function (stub) {
                var UserServiceStub = (function () {
                    function UserServiceStub() {
                    }
                    /**
                     *
                     * @param {string} username
                     * @param {string} password
                     * @return {app.bk.api.md.ResultModel}
                     */
                    UserServiceStub.prototype.login = function (username, password) {
                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    };
                    /**
                     *
                     * @param {string} username
                     * @return {app.bk.api.md.UserModel}
                     */
                    UserServiceStub.prototype.findByUsername = function (username) {
                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    };
                    return UserServiceStub;
                }());
                stub.UserServiceStub = UserServiceStub;
                UserServiceStub["__class"] = "app.ft.api.stub.UserServiceStub";
                UserServiceStub["__interfaces"] = ["app.bk.api.UserAPI", "app.bk.api.Api"];
            })(stub = api.stub || (api.stub = {}));
        })(api = ft.api || (ft.api = {}));
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var App = (function () {
            function App() {
                var _this = this;
                if (this.ui === undefined)
                    this.ui = null;
                if (this.vm === undefined)
                    this.vm = null;
                if (this.userController === undefined)
                    this.userController = null;
                this.ui = new nk.ft.ui.ext.UIX(new nk.ft.ui.im.UIImpl(window.document));
                this.vm = new nk.ft.vw.im.ViewManagerImpl(window, window.document, "#app");
                this.userController = new app.ft.ctr.UserController(function (error) { return _this.error(error); });
            }
            App.main = function (args) {
                new App().init();
            };
            /*private*/ App.prototype.init = function () {
                this.openLogin();
            };
            /*private*/ App.prototype.openLogin = function () {
                var _this = this;
                this.vm.open(function (onClose) { return new app.ft.vw.LoginView(_this.ui, onClose, _this.userController).init(function (user) {
                    _this.openMainView(user);
                }); });
            };
            /*private*/ App.prototype.openMainView = function (user) {
                var _this = this;
                this.vm.open(function (onClose) { return new app.ft.vw.MainView(_this.ui, onClose, user).init({ call: function () {
                        _this.openLogin();
                    } }); });
            };
            /*private*/ App.prototype.error = function (error) {
                window.alert(error);
            };
            return App;
        }());
        ft.App = App;
        App["__class"] = "app.ft.App";
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
(function (app) {
    var ft;
    (function (ft) {
        var ctr;
        (function (ctr) {
            var UserController = (function () {
                function UserController(onError) {
                    if (this.bus === undefined)
                        this.bus = null;
                    if (this.onError === undefined)
                        this.onError = null;
                    this.onError = (onError);
                    this.bus = (new nk.ft.http.im.BusClient(new app.ft.api.stub.UserServiceStub()));
                    this.bus.addFactory(app.bk.api.md.ResultModel, function () { return new app.bk.api.md.ResultModel(); });
                    this.bus.addFactory(app.bk.api.md.UserModel, function () { return new app.bk.api.md.UserModel(); });
                }
                UserController.prototype.login = function (username, pw, call) {
                    this.bus.on(function (i) { return i.login(username, pw); }).then(function (m) {
                        (function (target) { return (typeof target === 'function') ? target(m) : target.accept(m); })(call);
                    }, (this.onError));
                };
                UserController.prototype.findByUsername = function (username, call) {
                    this.bus.on(function (i) { return i.findByUsername(username); }).then(function (m) {
                        (function (target) { return (typeof target === 'function') ? target(m) : target.accept(m); })(call);
                    }, (this.onError));
                };
                return UserController;
            }());
            ctr.UserController = UserController;
            UserController["__class"] = "app.ft.ctr.UserController";
        })(ctr = ft.ctr || (ft.ctr = {}));
    })(ft = app.ft || (app.ft = {}));
})(app || (app = {}));
app.ft.App.main(null);
