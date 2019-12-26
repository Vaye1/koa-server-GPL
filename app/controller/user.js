const template = require('./public/ErrorTemplate');
const ControllerBase = require('../../core/index').BASE.ControllerBase;

class UserController extends ControllerBase {

	async afterInit() {
		
	}
	/**
	 * 用户注册
	 * @param {*}  data
	 */
	async signup(data) {
		//console.log("imei",data.imei)
		//console.log("imei",data.imei)
		//console.log("number",data.number)

		//var imei = document.getElementById("textIMEI").value;
		//var num = document.getElementById("textnumber").value;
		//var time = document.getElementById("textday").value;
		var imei = data.imei;
		var num = data.number;

		var strtime = '2020-01-23';
		var date = new Date(strtime); 
		var date = new Date(strtime.replace(/-/g, '/'));
		var time_end = Date.parse(date) / 1000 ;
		var time_sta = Math.round(new Date() / 1000)
		var time = parseInt((time_end-time_sta)/86400)
	
		if(num>=100){
			num=100;
		}
		if(time>=30){
			time=30;
		}
		////////////////////////////////////////////////////////
		function compile(code, num) {
			var c = String.fromCharCode(code.charCodeAt(0) + code.length);
			for (var i = 1; i < code.length; i++) {
			c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1) + num);
			}
			return (escape(c))
		}
		var date = new Date();
		var month = date.getMonth()+1;
		var day = date.getDate();
		if(month<10&&day<10){
			var rq = '' + "0"+ month +"0"+ day ;  
		}
		if(month<10&&day>10){
			var rq = '' + "0"+ month + day ;  
		}
		if(month>10&&day<10){
			var rq = '' + month +"0"+ day ;  
		}    
		if(month>10&&day>10){
			var rq = '' + month + day ;
		}
	
		imei = imei.toString()
		if(time<100){
			time = "0" + time
		}
		if(num<100){
			num = "0" + num
		}
		var key = '' + imei.slice(-4) + time + num + '' + rq ;
		var key_word=compile(compile(key,0),0);

		return {code:key_word};
	}

}
module.exports = UserController;
