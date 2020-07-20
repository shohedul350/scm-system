import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';

import SaleWidget from './sale/sale-widget';



import IntlMessages from '../../components/utility/intlMessages';



export default class IsoWidgets extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      padding: '15px',
      overflow: 'hidden'
    };

 
    return (
      <div style={wisgetPageStyle}>
       


        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label='TOTAL BLANCE'
                price='1000'
                details={<IntlMessages id="widget.salewidget1.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label='TOTAL SALE'
                price='500'
                details={<IntlMessages id="widget.salewidget2.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget3.label" />}
                price={<IntlMessages id="widget.salewidget3.price" />}
                details={<IntlMessages id="widget.salewidget3.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label={<IntlMessages id="widget.salewidget4.label" />}
                price={<IntlMessages id="widget.salewidget4.price" />}
                details={<IntlMessages id="widget.salewidget4.details" />}
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        
      </div>
    );
  }
}
