import React from "react";
import { Stage, Layer, Arrow,Transformer } from "react-konva";

const DrawArrow = ({ shapeProps, isSelected, onSelect, onChange,onDblClick,onMouseUp,onMouseMove }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

//   React.useEffect(() => {
//     if (isSelected) {
//       // we need to attach transformer manually
//       trRef.current.nodes([shapeRef.current]);
//       trRef.current.getLayer().batchDraw();
//     }
//   }, [isSelected]);

  return (
    <>
      <Arrow
       //ref={(shapeRef) => (this.arrow = shapeRef)}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
      
        fill="black"
        stroke="black"
        strokeWidth={4}
        draggable
        onDblClick={
            onDblClick
        
        }
        onDragEnd={(e) => {
           
            onMouseUp({
                ...shapeProps,
            })
            onMouseMove({
                ...shapeProps,
            })
          }}
       
      />
     
    </>
  );
};
export default DrawArrow