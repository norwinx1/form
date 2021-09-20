import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
      <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>

          <label class ="sr-only" for="inlineFormInputGroupUsername2">Username</label>
          <div class ="input-group mb-2 mr-sm-2">
          <div class ="input-group-prepend">
          <div class ="input-group-text">@</div>
          </div>
          <input type ="text" class ="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
          </div>

          <div class ="form-check mb-2 mr-sm-2">
          <input class ="form-check-input" type ="checkbox" id="inlineFormCheck"/>
          <label class ="form-check-label" for="inlineFormCheck">
          Remember me
          </label>
          </div>

          <button type ="submit" class ="btn btn-primary mb-2">Submit</button>
        </form>
        
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label class="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label class="form-check-label" for="inlineRadio2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
          <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
        </div>
      </div>
    </div>
  );
}

export default App;
