pragma solidity ^0.4.17;
contract Test1Contract {
	uint public saldo;

	function Test1Contract(uint saldoInicial) public {
		saldo=saldoInicial;
		}

	function ingresar(uint x) public {
		saldo+=x;
		}

	function retirar(uint x) public {
		saldo-=x;
		}

	function getSaldo() public view returns (uint retVal) {
		return saldo;
		}
	}
