class Adder{

   constructor(propsOne, propsTwo){
    this.props = propsOne;
    this.propsTwo = propsTwo;
   }

//  sum method
    sum(){
        // if it doesn't equal false
        if(this.props && this.propsTwo){
            let sum =  this.props + this.propsTwo;
            return sum;
        } else{
            return null;
        }
    }

//  render method
    render(){
        // if equals true
        if(this.sum()){
            return '<p>The sum of ' + this.props + ' and ' + this.propsTwo + ' is ' + this.sum() + '</p>';
        } else{
            return "Please run the run method first!";
        }
    }
}

 
module.exports =  Adder;