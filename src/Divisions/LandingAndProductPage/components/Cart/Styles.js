import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 24px;
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -5px;
  padding: 3px 7px;
  border-radius: 50px;
  background: #f05454;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
`;

export const CartSideBar = styled.div`
  z-index: 1000;
  border-radius: 15px;
  width: 550px;
  height: 95%;
  background: #ffffff;
  padding: 25px;
  position: fixed;
  overflow: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all ease-in-out 0.3s;

  &.expand {
    transition: all ease-in-out 0.3s;
    right: 30px;
  }

  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -5500px;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

export const SideBarHeader = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-transform: uppercase;
  position: relative;
  padding: 15px 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  margin: 35px 0 75px 0;
`;

export const CardImage = styled.img`
  flex: 1;
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
`;

export const CardBody = styled.div`
  flex: 2;
  margin-left: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const CardRemove = styled(FontAwesomeIcon)`
    font-size: 16px:
    color: #000000;
    cursor: pointer;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ClearButton = styled.button`
  width: 100%;
  border-radius: 20px;
  padding: 18px 24px;
  background: #8467f3;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
