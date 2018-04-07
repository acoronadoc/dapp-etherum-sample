

function ingresar() {
	var cantidad=document.getElementById("cantidad").value;

	Test1Contract.methods.ingresar( cantidad ).send({from: web3.eth.defaultAccount});
	}

function retirar() {
	var cantidad=document.getElementById("cantidad").value;

	Test1Contract.methods.retirar( cantidad ).send({from: web3.eth.defaultAccount});
	}

function consultar() {
	var address=Test1Contract["_address"];
	var myContract = new EmbarkJS.Contract({abi: Test1Contract["_jsonInterface"], address: address });

	myContract.methods.getSaldo().call().then(function(value) { 
		document.getElementById("saldo").innerHTML=value;
		});	
	}
