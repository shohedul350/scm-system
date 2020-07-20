import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Bill from './Bill'
 
class ComponentToPrint extends React.Component {
  render() {
    return (
        <div>
 <Bill/>
        </div>
   
    );
  }
}
 
const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <div className="">
      <ComponentToPrint ref={componentRef} />
   
     
     
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