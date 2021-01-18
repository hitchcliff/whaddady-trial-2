export default function Draggable(ele: HTMLElement) {
  let pos = { left: 0, x: 0 };

  function mouseDownHandler(e: any) {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

    pos = {
      left: ele.scrollLeft,
      // Get the current mouse position
      x: e.clientX,
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  function mouseMoveHandler(e: any) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element
    ele.scrollLeft = pos.left - dx;
  }

  function mouseUpHandler() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
}
