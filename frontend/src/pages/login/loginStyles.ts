import styled from "styled-components";

// Define the interface for the Button component props
interface IButton {
  primary?: string; // Optional primary prop of type string
}

// Define a styled button component with styled-components
export const Button = styled.button<IButton>`
  background-color: ${(props) => (props.primary ? "#007bff" : "white")}; // Set background color based on primary prop
  color: ${(props) => (props.primary ? "white" : "#007bff")}; // Set text color based on primary prop
  border: 2px solid #007bff; // Set border style
  padding: 10px 20px; // Set padding
  border-radius: 5px; // Set border radius
  cursor: pointer; // Set cursor style to pointer

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#e9ecef")}; // Change background color on hover
  }
`;

// Define a styled container component with styled-components
export const Container = styled.div`
  background-color: #f8f9fa; // Set background color
  width: 100%; // Set width to 100%
  padding: 20px; // Set padding
  border-radius: 5px; // Set border radius
`;
