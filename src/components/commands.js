import React from 'react';

class Commands extends React.Component {
  render() {
    const isFirstPage = () => {
      return ['/', '/1', '/1/'].includes(this.props.location);
    }
    
    const isLastPage = () => {
      return ['/17', '/17/'].includes(this.props.location);
    }

    return (
      <footer class="commands">
          { !isFirstPage() &&  <span class="previous"><i class="ri-arrow-left-line"></i> Previous</span> }
          { isFirstPage() && <span class="instructions">Use the arrow keys to navigate</span> } 
          { !isLastPage() &&  <span class="next">Next <i class="ri-arrow-right-line"></i></span> }
          { isLastPage() &&  <span class="instructions"><a href="/1">Click here to restart the presentation</a></span> }
      </footer>
    );
  }
}

export default Commands;
