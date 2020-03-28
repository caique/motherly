import React from 'react';

class Commands extends React.Component {
  render() {
    const isNotFirstPage = () => {
      return this.props.location !== '/1';
    }
    
    const isNotLastPage = () => {
      return this.props.location !== '/17';
    }

    return (
      <footer class="commands">
        { isNotFirstPage() &&  <span class="previous"><i class="ri-arrow-left-line"></i> Previous</span> }
        <span class="description">Use the arrow keys to navigate</span>
        { isNotLastPage() &&  <span class="next">Next <i class="ri-arrow-right-line"></i></span> }
      </footer>
    );
  }
}

export default Commands;
