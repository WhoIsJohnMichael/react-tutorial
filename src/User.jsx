export const User = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
    );
  };
  
//nother way to export
// export { User }; 