var current_selection;

function toggle_button(enable)
{
    var next_button = document.getElementById("next-button");
    next_button.disabled = !enable;
}

function radio_select(name)
{
    var text_field = document.getElementById("text-field");
    var label = document.getElementById("other-field");

    if (text_field !== null)
        text_field.value = "";

    if (label !== null && label.classList.contains("active"))
        label.classList.remove("active");

    if (current_selection !== undefined)
        current_selection.classList.remove("active");

    current_selection = document.getElementById(name);
    current_selection.classList.add("active");

    toggle_button(true);
}

function text_entry()
{
    var input_value = document.getElementById("text-field").value;
    var label = document.getElementById("other-field");

    if (current_selection !== undefined)
    {
        current_selection.classList.remove("active");
        current_selection.checked = false;
        current_selection = undefined;
    }

    if (input_value !== undefined && input_value.length >= 1) {
        if (label !== null)
            label.classList.add("active");

        toggle_button(true);
    } else {
        if (label !== null)
            label.classList.remove("active");

        toggle_button(false);
    }
}
