import React, {Component} from "react";
import logo from "../search.svg";
import "./searchbox.css";
import classNames from "classnames";
class Searchbox extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFocused: false,
      content:""
    };
  }
  changeInputValue(e) {
    this.setState({
     [e.target.name]:[e.target.value]
    });

  }
    submitForm(e) {
      //Chặn các event mặc định của form
      e.preventDefault();
   
     //Gọi hàm validationForm() dùng để kiểm tra form
      // const validation = this.validationForm()
   
      // //Kiểm tra lỗi của input trong form và hiển thị
      // if (validation.error) {
      //   alert(validation.msg)
      // }else{
      //   alert('Submit form success')
      // }
    }
    validationForm() {
      const re = /"090"+\S/;
      //Kiểm tra email
      if (re.test(this.state.content)) return false;
      if(this.state.content.length !==10) return false;
      return true;
    }
  
    render(){
        return (
            <div className="searchbox">
              <form
                    onSubmit={e => {
                        this.submitForm(e);}}>
            <input className={classNames({"newBorderColor":!this.validationForm()})}
              type="text"
              name="searchbox"
              placeholder="Enter Somethings..."
              onFocus={(e) =>this.setState({"isFocused":true})}
              onBlur={()=>this.setState({"isFocused":false})}
              onChange={(e)=>this.setState({"content": e.target.value})}
            />
          <span>
          <button type="submit" className={classNames("search",{"btn-hidden":this.state.isFocused===true})}>
            <img src={logo} alt="s" className="searchbtn"/>
          </button>
          </span>
        </form>
        
      </div>
    );
  }
}
export default Searchbox;