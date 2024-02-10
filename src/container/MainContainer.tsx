import './MainContainer.css';
import WritingContainer from './WritingContainer';

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="sideMenu">Side View</div>
      <WritingContainer />
    </div>
  );
}

export default MainContainer;
