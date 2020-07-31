import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	 // maxWidth: '36ch',
	  backgroundColor: theme.palette.background.paper,
	},
	inline: {
	  display: 'inline',
	},
  }));

  function RenderRequest(){
	const classes = useStyles();

	return (
	  <List className={classes.root}>
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Brunch this weekend?"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  Ali Connors
				</Typography>
				{" — I'll be in your neighborhood doing errands this…"}
			  </React.Fragment>
			}
		  />
		</ListItem>
		<Divider variant="inset" component="li" />
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Summer BBQ"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  to Scott, Alex, Jennifer
				</Typography>
				{" — Wish I could come, but I'm out of town this…"}
			  </React.Fragment>
			}
		  />
		</ListItem>
		<Divider variant="inset" component="li" />
		<ListItem alignItems="flex-start">
		  <ListItemAvatar>
			<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
		  </ListItemAvatar>
		  <ListItemText
			primary="Oui Oui"
			secondary={
			  <React.Fragment>
				<Typography
				  component="span"
				  variant="body2"
				  className={classes.inline}
				  color="textPrimary"
				>
				  Sandra Adams
				</Typography>
				{' — Do you have Paris recommendations? Have you ever…'}
			  </React.Fragment>
			}
		  />
		</ListItem>
	  </List>
	);
  }

const Web3 = require('web3');
const abi= [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address payable",
				"name": "author",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "requestHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "fullfilled",
				"type": "bool"
			}
		],
		"name": "RequestCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "collectedAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valid",
				"type": "uint256"
			}
		],
		"name": "Verified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_rHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "makeRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "request",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "author",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "requestHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "fullfilled",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_money",
				"type": "uint256"
			}
		],
		"name": "sendMoney",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "verify",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "collectedAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "valid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
const TrustChainAddress = '0x4D8BBf5A16Fdc02340a34132E62391Ee782B79a1';
const web3 = new Web3( new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/c1633c281b39417eb2d061c5479a68f7'));

export default class Request extends Component{
    constructor(props){
        super(props);
        this.state={
            requestCount:0,
			requests:[],
			data:[],
			index:[],
			State:''
			
        }

    }

    async componentDidMount(){
        await this.loadEthereumData();
    }
    async loadEthereumData(){
        const contract = new web3.eth.Contract(abi, TrustChainAddress);
        let requestCount;
        contract.methods.requestCount().call().then((rc)=>{
            requestCount = rc;
            this.setState({requestCount});
            for(let i =1; i<=requestCount; i++){
                contract.methods.request(i).call().then(async(request)=>{
                    console.log('request', request)
                    if(!request.fulfilled){
					  const concat = require('it-concat')
                      const  Data =  await concat(ipfs.cat('QmbQ3PTMdbQ3kdVVff7BLTmyTgg5Sf8UTAMS3k954GUvBh'));
					   console.log('Data', Data.toString());
                       
                       this.setState({data: [...this.state.data, Data.toString()]})
                       this.setState({index: [...this.state.index, i]})
						console.log(this.state.index)
						this.setState({
							requests: [...this.state.requests, request]
						   
						  })
	
                    }
                    else{
                        console.log(i);
                    }
                })
            }
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row col-12 col-md-12">
                <MDBCol md="12">
                <MDBFormInline className="md-form mr-auto mb-4">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                    Search
                  </MDBBtn>
                  </MDBFormInline>
                  </MDBCol>
                
				</div>
				<RenderRequest />
            
            </div>
        );
    }
}