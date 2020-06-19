const FORMSJS = {
    // 1.0.0
    
    readForm(selector) {
        let parent = document.querySelector(selector);

        if (parent) {
            let values = {};

            Array.from(parent.getElementsByClassName("data")).forEach((element) => {
                let name = element.name;

                if (name && !values[name]) {
                    let type = element.type;

                    switch (type) {
                        case "select-one": {
                            let option = element.options[element.selectedIndex];

                            if (option) {
                                values[name] = option.value;
                            } else {
                                values[name] = null;
                            }
                            break;
                        }

                        case "radio": {
                            if (element.checked) {
                                values[name] = element.value;
                            }
                            break;
                        }

                        case "checkbox":
                            values[name] = element.checked;
                            break;

                        default: {
                            values[name] = element.value;
                            break;
                        }
                    }
                }
            });

            return values;
        } else {
            throw "Selector resulted in no element.";
        }
    }

};