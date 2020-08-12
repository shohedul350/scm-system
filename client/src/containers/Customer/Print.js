
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Invoice from './CustomerInvoice'
 
// class ComponentToPrint extends React.Component {
  
//   render() {
//     return <h1>hi</h1>
  
//   }
// }
 
const Print = (props) => {
  console.log(props.name)
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div className="">
      {/* <Invoice ref={componentRef} /> */}
   
     
     
      <div class="row">
    <div class="col-9">
      
    </div>
    <div class="col">
    <button className="btn btn-primary ml-auto" style={{}} onClick={handlePrint}>Print this out!</button>
    </div>
  </div>
      
    </div>
  );
};
export default Print





