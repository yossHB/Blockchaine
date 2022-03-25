var web3;

async function loadWeb3() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}
async function load() {
  await loadWeb3();
  updateStatus('Ready!');
}
function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}
load();


async function transfere(){
    let transfere = document.getElementById("destinationaddress").value;
    let value = document.getElementById("value").value;
	const result = await window.contract.methods.transfere(transfere,value);
    document.getElementById("ResultTransfer").innerHTML = "Result : " + result.toString();
}
async function transferFrom(){
    let admin = document.getElementById("fromadminaddress").value;
    let destination = document.getElementById("fromdestinationaddress").value;
    let value = document.getElementById("fromvalue").value;
	const result = await window.contract.methods.transfereFrom(admin,destination,value);
    document.getElementById("ResultTransferFrom").innerHTML = "Result : " + result.toString();
}
async function balanceOf(){
    let transfer = document.getElementById("balanceadminaddress").value;
	const result = await window.contract.methods.balanceOf(transfer);
    document.getElementById("ResultBalanceOf").innerHTML = "Result : " + result.toString();
}
async function allowance(){
    let admin = document.getElementById("allowanceadminaddress").value;
    let destination = document.getElementById("allowancedestinationaddress").value;
	const result = await window.contract.methods.allowance(admin,destination);
    document.getElementById("ResultAllowance").innerHTML = "Result : " + result.toString();
}




const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
];

async function loadContract() {
    return await new window.web3.eth.Contract(abi, '0xCc7790D7702f4A91b56B16270f24442494ba5DF7');
}
if(typeof web3!=='undefined'){
	web3 = new Web3(web3.currentProvider);
}else{
	web3 = new Web3(new Web3.providers.http.HttpProviders("http://localhost:8545"));
}
loadContract();

/*
try {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
} catch (error) {
      alert(error)
}*/