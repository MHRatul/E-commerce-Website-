import Input from "../../components/Input";
import"./Category.css";

function Category({handleChange}) {
  return(
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="checkmark"></span>All
        </label>

        <input
        handleChange={handleChange}
        value="sneakers"
        title="sneakers"
        name="test"
        />
       <input
        handleChange={handleChange}
        value="falts"
        title="Falts"
        name="test"
        />
        <input
        handleChange={handleChange}
        value="sandals"
        title="sandals"
        name="test"
        />
        <input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
        />
        
      </div>
    </div>
    );
}
export default Category;