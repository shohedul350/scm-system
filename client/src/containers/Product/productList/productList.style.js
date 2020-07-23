
import styled from 'styled-components';
import WithDirection from '../../../config/withDirection';

// import bgImage from '../../image/sign.jpg';

const ProductListPageWrapper = styled.div`
  width: 100%;
  padding: 50px 35px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    padding: 30px 20px;
  }
  .my-custom-scrollbar {
    position: relative;
    height: 38p0px;
    overflow: auto;
    }
    .table-wrapper-scroll-y {
    display: block;
    }
    .confirmAlert{
      color: red;
    }
`;

export default WithDirection(ProductListPageWrapper);