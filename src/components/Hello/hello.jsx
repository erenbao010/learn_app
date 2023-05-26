export function Button(props) {
  console.log(props);
  return (
 
  <div className="Info">{props.username}
   <button>I am a {props.color} Hackerr !</button>
  </div>
  );
  
}
export function Redbutton(props){
  return <button>click me</button>;
}
export function Bluebutton(props){
  return <button>click me again</button>;
}