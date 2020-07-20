// import React, { Component,useContext} from 'react';
// import Popover from '../uielements/popover';
// import IntlMessages from '../utility/intlMessages';
// import AdminContext from '../../context/adminContext/adminContext'
// import userpic from '../../image/user1.png';

// import TopbarDropdownWrapper from './topbarDropdown.style';



// class TopbarUser extends Component {
//   constructor(props) {
//     super(props);
//     this.handleVisibleChange = this.handleVisibleChange.bind(this);
//     this.hide = this.hide.bind(this);
//     this.state = {
//       visible: false
//     };
//   }
//   hide() {
//     this.setState({ visible: false });
//   }
//   handleVisibleChange() {
//     this.setState({ visible: !this.state.visible });
//   }
//   // const = {logout}=useContext(AdminContext)

//   render() {
//     const content = (
//       <TopbarDropdownWrapper className="isoUserDropdown">
//         <a className="isoDropdownLink">
//           <IntlMessages id="themeSwitcher.settings" />
//         </a>
//         <a className="isoDropdownLink">
//           <IntlMessages id="sidebar.feedback" />
//         </a>
//         <a className="isoDropdownLink">
//           <IntlMessages id="topbar.help" />
//         </a>
//         <a className="isoDropdownLink" >
//           <IntlMessages id="topbar.logout" />
//         </a>
//       </TopbarDropdownWrapper>
//     );

//     return (
//       <Popover
//         content={content}
//         trigger="click"
//         visible={this.state.visible}
//         onVisibleChange={this.handleVisibleChange}
//         arrowPointAtCenter={true}
//         placement="bottomLeft"
//       >
//         <div className="isoImgWrapper">
//           <img alt="user" src={userpic} />
//           <span className="userActivity online" />
//         </div>
//       </Popover>
//     );
//   }
// }
// export default TopbarUser

// functional component
import React, {useState,useContext} from 'react';
import Popover from '../uielements/popover';
import IntlMessages from '../utility/intlMessages';
import AdminContext from '../../context/adminContext/adminContext'
import userpic from '../../image/user1.png';

import TopbarDropdownWrapper from './topbarDropdown.style';

export default function TopbarUser() {


  const [visible, setVisible] = useState(false);

  const {logout}=useContext(AdminContext)

     function handleVisibleChange(){
      
      !visible?setVisible(true) : setVisible(false)
      
      }
     
         const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
       
        <a className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a>
        <a className="isoDropdownLink" onClick={logout}>
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );
  return (
      <Popover
        content={content}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
}

