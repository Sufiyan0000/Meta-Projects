import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrCodeGenerator(){

    const [input,setInput] = useState('')
    const [qrCode,setQrCode] = useState('')

    function handleQrCodeGenerator(){
        setQrCode(input)
        setInput('')
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input type="text" 
             onChange={(e) => setInput(e.target.value)}
             placeholder='Enter your value'
             value={input}
            />

            <button onClick={handleQrCodeGenerator}>Generator</button>
            <div>
                <QRCode value={qrCode} id='qr-code-value'/>
            </div>
        </div>
    </div>
}