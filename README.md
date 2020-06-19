# FormsJS
A small Javascript library to help with HTML forms  
  
[Example](https://e3ndr.github.io/FormsJS/example.html)  
  
## How to use  
  
```html
<!-- Using Bulma here, they make html look pretty -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.css" />
<script src="https://e3ndr.github.io/FormsJS/forms.js"></script>

<main>
    <div class="container is-fluid">
        <div class="columns">
            <div class="column">
                <div id="form">
                    <label class="label">
                        Username
                        <input class="input data" name="username" type="text" />
                    </label>
                    <label class="label">
                        Send me promotional emails
                        <br />
                        <input class="checkbox data" name="allow_promotional_emails" type="checkbox" />
                        <br />
                    </label>
                    <label class="label">
                        Gender
                        <br />
                        <select class="select data" name="gender">
                            <option value="other">Other</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </label>
                    <div class="control">
                        <label class="label">
                            Account Type
                        </label>
                        <label class="radio">
                            <input class="data" checked type="radio" name="account_type" value="free" />
                            Free Account
                        </label>
                        <label class="radio">
                            <input class="data" type="radio" name="account_type" value="premium" />
                            Premium Account
                        </label>
                    </div>
                    <br />
                    <button class="button" id="submit">Submit</button>
                </div>
            </div>
            <div class="column">
                <label class="label">
                    Json Result
                    <textarea class="textarea" rows="10" id="result" placeholder="Hit submit" readonly></textarea>
                </label>
            </div>
        </div>
    </div>
</main>

```  
  
Then, when ready  
```javascript
let result = FORMSJS.readForm("#form");
```
