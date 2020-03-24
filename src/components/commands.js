import React from 'react';

class Commands extends React.PureComponent {
  render() {
    return (
      <footer class="commands">
        <span class="previous"><i class="ri-arrow-left-line"></i> Previous</span>
        <span class="description">Use the arrow keys to navigate</span>
        <span class="next">Next <i class="ri-arrow-right-line"></i></span>
      </footer>
    );
  }
}

export default Commands;
