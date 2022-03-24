import React from "react";

// components
import MemeShare, {
  Container,
  AppleDots,
  Title,
  FileButton,
  Notification,
  LinkButton,
} from "./App";

// images
import react from "./assets/images/logo512.png";
import Rotate from "./components/Container/Rotate/Rotate";

const App = () => {
  return (
    <MemeShare background="random">
      <Notification
        title="Notification"
        text="This is a notification This is a notification This is a notification This is a notification This is a notification This is a notification"
        visible={true}
        delay={0}
      />
      <Container>
        <AppleDots />
        <LinkButton link="/">Hola</LinkButton>
      </Container>
    </MemeShare>
  );
};

export default App;
