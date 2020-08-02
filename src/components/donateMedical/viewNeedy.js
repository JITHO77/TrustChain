import React, {useState} from 'react';

import {Button } from 'reactstrap'

export default function ViewNeedy({data, request, requestCount}){
    console.log('data', data)
    const  _arrayBufferToBase64 = ( buffer ) => {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    let Image = _arrayBufferToBase64(data.image.data)
    console.log('base64',Image);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md mt-1">
                    <img src={`data:image/jpeg;base64,${Image}`} className="img-fluid"/>
                </div>
                <div className="col-12 col-md mt-5">
                    <h3>
                        My Request
                    </h3>
                    {`-${data.request}`}
                </div>

            </div>
            <div className="row">
            <div className="col-12 col-md mt-1">
                  <h4>Personal Details</h4><br/>
                  <p><b>Name : </b>{` ${data.name}`}</p><br/>
                  <p><b>State : </b>{` ${data.state}`}</p><br/>
                  <p><b>Address : </b>{` ${data.address}`}</p><br/>
                  <p><b>Phone : </b>{` ${data.phno}`}</p><br/>
                  <Button color="primary">View Identity</Button>
            </div>
            <div className="col-12 col-md mt-1">
                <h4>
                    Hospital Details
                </h4>
                <br/>
                  <p><b>Hospital Name : </b>{`${data.hName}`}</p><br/>
                  <p><b>Address : </b>{` ${data.hAddress}`}</p><br/>
                  <p><b>Consultant Doctor : </b>{` ${data.doctor}`}</p><br/>
                  <p><b>Hospital Phone : </b>{` ${data.hPhno}`}</p><br/>
                  <Button color="primary">View Medical Certificate</Button>
            </div>

        </div>
            <div className="row">
                <div className="col-12 col-md-2 mt-1">
                <h3>{`Pay For ${data.name}`}</h3>
                <Button>PAY</Button>

                </div>
            </div>
            
        
        </div>
    );

}

