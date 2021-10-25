		function login(){
			//"email": "trader@gmail.com",
			//"password": "trader@gmail.com"
			var log ={
			    "email": $ID("log_email").value,
			    "password": $ID("log_password").value
			}
			println(log)
			$send({
				method : POST,
				action : "http://agrihub.agriboost.ph/api/login/mobile/trader?fbclid=IwAR0riIZGQCb_CtXz-xeFl36dg10PRffI6Uu8l6fqz6hPs1zJBfSsauH-zfg",
				// action : "http://agriboost.ph/api/login/mobile/trader",
				data : $DATA(log),
				func : function(res){
					var user_data = JSON.parse(res)
					if(Object.hasOwn(user_data, 'token')){
						println("Login")
						goto("market_demand.html?data="+res)
					}
					else{
						println("ERROR")
						$ID('error_login').style.display='block'
					}

				},
				// headers : {
				// 	// "Accept" : "application/json",
				// 	// "Content-Type" : "application/json",
				// 	"Access-Control-Allow-Origin" : "*"
				// }
			})

		}	