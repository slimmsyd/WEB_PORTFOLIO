import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Nav'

import React, {useState, useEffect, useRef} from 'react'; 
import {ethers, providers, Contract, utils} from 'ethers'; 



import Web3modal from 'web3modal';
import { nft_address, nft_abi } from '../constants';





export default function Home() {

  const [isConnected, setIsConnected] = useState(false); 
  const [accountAddress, setAccountAddress] = useState("");
  const [setLoading, isLoading] = useState(false); 
  const [setMaxTokenIds, maxTokenIds] = useState("")

  const web3modal = useRef(); 


  useEffect(() => {
    web3modal.current = new Web3modal(
      {
        network: "mumbai", 
        providerOptions: {},
        disableInjectedProvider: false
      }
    )
    connect()
  })

  //This functino splits the string 
  const splitString = string => { 
    let result1 = string.substring(0,5) //gets the first 5 charactesr of string 
    let result2 = string.substring(38, string.lenght) // lets the last 5? dendingon the length of array 
    let finalResult = result1 + "..." + result2 //concact them together 
    return finalResult;

  }

    //get provider or Signer 
    const getProviderOrSigner = async(needSigner = false) => { 
      const provider = await web3modal.current.connect()
      const web3provider = new providers.Web3Provider(provider)
  
      const signer =  web3provider.getSigner();
      const address = await  signer.getAddress();
      const substringAddress = splitString(address);
      setAccountAddress(substringAddress);
  
      //check if connected currenlty to the right chainID
      //set it in brackets because chainID is an object 
      const {chainId} = await web3provider.getNetwork();
      if(chainId !== 80001) { 
        // window.alert("You are on the wrong network, switch to rinkeby")
      }
  
      if(needSigner) { 
        const signer = web3provider.getSigner(); 
        return signer;
      }
  
      return web3provider;
  
    }



  const mint  = async() => { 
      try { 
        const signer = await getProviderOrSigner(true); 
        const contract = new Contract ( 
          nft_address,
          nft_abi,
          signer
        )
        const tx = await contract.mint({value: utils.parseEther("0.01")})
        setLoading(true);
      }catch(e) { 
        window.alert("Must not have enough money");
        console.error(e)
      }
  }

  const returnMaxToken = async() => { 
    try { 
      const provider = await getProviderOrSigner(); 
      const contract = new Contract(
        nft_address,
        nft_abi,
        signer
      );

      const maxTokens = await contract.maxTokenIDS();
      setMaxTokenIds(maxTokenIds.toString());
      
    }catch(e) { 
      console.error(e)
    }
  }



  const connect = async() => 
  { 
    try {
      await getProviderOrSigner();
      setIsConnected(true); 
    }catch(e)
     { 
      console.error(e)
     }
  }























  return (
    <div className = "wrapper">
      

      <div className = "flex">
      <Navbar
        accountAddress = {accountAddress}
        isConnected = {isConnected}
        connect = {connect}


      />

      
      <div className = "flex-margin">

        <header className = "container">
            <div className  = "header-div-left">
                <h1>Sydney Sanders</h1>
                <p>Front-End Web Developer</p>
                <p id = "grey"><span id = "blue">2+ Years of</span> Web Development. Mission is to always curate a website that the audiences loves</p>
                <p id = "grey"><span id = "green">Skill Sets:</span> HTML, Javascript, CSS, Solidity, PHP, Tailwind, EthersJs, Web3js </p>
                <p id = "grey"><span id = "yellow">Frameworks:</span>: ReactJs, Nextjs</p>
            </div>
            <div className = "header-div-right">
              <div className = "circle"></div>
            </div>
           
        </header>

        <div className = "container">
          <h1>Feature Items</h1>
         

        </div>
        <div className = "feature-posts">
            <div className = "feature-container">
            <button><a href = "https://created2grow.com">Visit</a></button>
              
            </div>
            <div className = "feature-container">
            <button><a href = "https://liam-casey-landing-page.vercel.app/">Visit</a></button>
              
            </div>
            <div className = "feature-container">

              <button onClick={mint} >MINT NFT</button>
              
            </div>
          </div>

          <p id = "margin">Do more</p>


          <div className = "container">
            <div className = "header-container-left">
            <h1>Latest Work</h1>
            <p id = "grey">Developed numerous web apps/websites utilzing core front end technology skills</p>
            </div>
          </div>
          
          <div className = "work-project">
                <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>01</span>
                      <a href = "https://created2grow.com">Created2Grow Business Page</a>

                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">05</span>
                      <span id = "small">Custom lead-gen website</span>
                  </div>

                  <div className = "work-flex-right"></div>
                </div>
          </div>
          <div className = "work-project">
          <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>02</span>
                      <a href = "https://liam-casey-landing-page.vercel.app/">Liam Casey Landing Page</a>
                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">05</span>
                      <span id = "small">Custom build lead-gen website</span>
                  </div>

                  <div className = "work-flex-right"></div>
                </div>
          </div>
          <div className = "work-project">
          <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>03</span>
                      <a href = "https://thecitadelagency.co/">The Citadel Agency</a>
                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">05</span>
                      <span id = "small">Custom build website on wordpress</span>
                  </div>
                  <div className = "work-flex-right"></div>
                </div>
          </div>
          <div className = "work-project">
          <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>04</span>
                      <a href = "https://ad-vance-website.vercel.app/">Celi Agency</a>
                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">05</span>
                      <span id = "small">Custom lead-gen website</span>
                  </div>
                  <div className = "work-flex-right"></div>
                </div>
          </div>
          <div className = "work-project">
          <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>05</span>
                      <a href = "https://www.animalondon.com/">Anima London</a>
                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">06</span>
                      <span id = "small">Custom build website on shopify</span>
                  </div>
                  <div className = "work-flex-right"></div>
                </div>
          </div>

           <div class = "work-project">
          <div className = "work-flex">
                  <div className = "work-flex-left">
                      <span>05</span>
                      <a href = "https://thecza.shop/?_ab=0&_fd=0&_sc=1">CZA Shop </a>
                  </div>
                  <div className = "work-flex-left">
                      <span id = "none">07</span>
                      <span id = "small">Custom site buid on shopify</span>
                  </div>
                  <div className = "work-flex-right"></div>
                </div>
                </div>   

          <div class = "line"></div>


        </div>

      <footer>
        <div class = "footer-col">
          <ul>
            <li><a href = "https://github.com/slimmsyd">Github</a></li>
            <li><a href = "https://www.instagram.com/futursyd/">Instagram</a></li>
            <li><a href = "https://www.linkedin.com/in/sydney-sanders-dev/">Linkedin</a></li>
          </ul>
        </div>
        <div class = "footer-col"></div>
        <div class = "footer-col"></div>


      </footer>

      </div>


    </div>
  )
}
