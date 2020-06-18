$(document).ready(function () {

    /*************************************
     * Form Tag related custom Changes
     ***************************************/
    $('form').addClass("ui large form");

    var validationRules = {
        Name: {
            identifier: 'Name',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your Name'
                },
                {
                    type: 'minLength[5]',
                    prompt: 'Please enter valid Name'
                },
                {
                    type: 'maxLength[50]',
                    prompt: 'Your Name is too big...'
                }
            ]
        },
        Position: {
            identifier: 'Position',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter Job Position'
                }
            ]
        },
        Office_Location: {
            identifier: 'Office_Location',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter location of Office'
                }
            ]
        },
        Address: {
            identifier: 'Address',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter Address'
                }
            ]
        },
        Country: {
            identifier: 'Country',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter Country'
                }
            ]
        },
        Salary: {
            identifier: 'Salary',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter Salary'
                },
                {
                    type: 'decimal',
                    prompt: 'Please enter a valid Salary amount'
                }
            ]
        },
        Age: {
            identifier: 'Age',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter Age'
                },
                {
                    type: 'integer[20..60]',
                    prompt: 'Please enter enter valid age'
                }
            ]
        }
    };

    $('.ui.form').form({
        on: 'blur',
        inline: true,
        fields: validationRules
    });

});