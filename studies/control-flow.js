/*
*
*
*
*
*
*
*
********************************************************************************
*                             CONTROL FLOW                                     *
********************************************************************************                             
*
*
*
*   Control flow in a program is managed by Conditional Statements that use Logical
*   Operators, to return boolean (truthy/falsey) values. Control Flow happens through
*   "If-Else If" Statements and chains, as well as Switch statements.
*
*
*
*   0.If Statement
*
*
*       If...Then!
*
*
*   If Statements utilize the keyword "If" to 'Check' if a specific 'Condition'
*   evaluates to true. If the first condition is false, the code block returns 
*   the alternate code located in the "else" portion of the chain. When a block
*   of code is returned true, the remainder of the chain gets ignored, If-Else If
*   chains are read and run top to bottom in JavaScript, and there can be as many
*   conditions as desired.
* 
*                              
*                            
*           "If" Statement:
*/                        if (1 === 1){
                            console.log(true);
                                }
                        //prints true to the console
                            
                        
//          "If Else" Statement:                            
                if (1 === 'one'){
                            console.log(true);
                                } else {
                                  console.log(false);
                                }
                        // prints false to the console
                        
                        if (1 === 1){
                            console.log(true);
                                } else {
                                  console.log(false);
                                }
                        // prints true to the console
                                
/*  Code stops running if the 1st condition evaluates to true. If the first 
*   condition evaluates to false, the code tests a second condition, this begins 
*   a chain called:
*
*                           "If - Else If"
*
*   1. Else if
*       "Else if" statements utilize the keywords "else if" and follow the 
*        initial "If" statement with additonal statements to be checked. There 
*        will be an "Else If" statment only if the result of
*        the first conditional statment is false. If any of the following 
*        statments evaluate to false, the code will run until it reaches a truthy.
*        There can be as many "Else If" statements as desired.
*            
*
*/                        var house = 'Slytherin';
                        if (house === 'Gryffindor'){
                            console.log('Nearly Headless Nick');
                                } else if (house === 'Ravenclaw'){
                                    console.log('The Grey Lady');
                                }   else if (house === 'Hufflepuff'){
                                  console.log('The Fat Friar');
                                } else if (house === 'Slytherin'){
                                    console.log('The Bloody Baron');
                                }
/*    
*   2. Else
*       If ALL the statments are false, the final code block runs, it is also 
*       considered a "default" statement, and is returned only if ALL other 
*       statements in the chain yield a "false" value.
*
*/
                         var house = 'Hogwarts';
                        if (house === 'Gryffindor'){
                            console.log('Nearly Headless Nick');
                                } else if (house === 'Ravenclaw'){
                                    console.log('The Grey Lady');
                                } else if (house === 'Hufflepuff'){
                                  console.log('The Fat Friar');
                                } else if (house === 'Slytherin'){
                                    console.log('The Bloody Baron');
                                } else {
                                    console.log('PEEVES!');
                            }
/*
*
*    When constructed together the proper syntax for "If-Else If- Else" Chains:
*
*/  
        //Ex. 1       
                    if (1 === 1){
                       console.log(true); //this will execute because it IS true
                    }    
                     else if (1 === 'one'){
                        console.log("that's true too");
                    } else {
                        console.log('hella false');
                    }
                    
        //Ex. 2    
                    if (1 !== 1){ 
                        console.log(true);
                    }    
                     else if (1 === 1){
                        console.log("that's true too"); 
                        //this block executes and the code stops
                    } else {
                        console.log('false');
                    }

        //Ex. 3         
                    if (1 !== 1){
                        console.log(true);
                    }    
                     else if (1 === 'one'){
                        console.log("that's true too");
                    } else {
                        console.log('false');
                        //this block will execute since both conditions are false
                    }
/*
*
*
*   3. Switch
*
*
*
*   Don't forget to take a break!
*
*
*   The Switch method evaluates an input expression, matches the 
*   expression's value to a case clause, and then executes a statement associated
*   with that case.
*
*
*                        switch(expression) {
*                         case 1:
*                        // code block
*                        break;
*                        case 2:
*                        // code block
*                        break;
*                        default: 
*            //The default keyword tells code to run this if there is no match
*                            }
*
*   Switch statements MUST include a break statement using the keyword "break".
*   Break allows the code to break out of the switch box and move to the next
*   switch by stopping the execution in that block, similar to a Stop condition
*   in a loop. If there is no break statement, the next block of code will execute
*   whether or not it matches the value of the input expression.
*
*/
            var color = "fuschia";
            switch(color){
            case "magenta":
                console.log("The color Is magenta");
                break;
            case "fuschia":
                console.log("The color is fuschia");
                break;
            case "obsidian":
                console.log("The color is obsidian");
                    break;
            default:
            console.log("We have all these cool colors and you choose that?");
                    }

/*   The default statement can also be moved to the top of the switch, there just
*    must then be a break statement at the end so the code can still be broken
*    out of
*/    

        switch(color){
            default:
            console.log("We have all these cool colors and you choose that?");
                break;
            case "magenta":
                console.log("The color Is magenta");
                break;
            case "fuschia":
                console.log("The color is fuschia");
                break;
            case "obsidian":
                console.log("The color is obsidian");
                    }
/*
*
*
*   If multiple cases match a case input value, the first one will be chosen, if
*   no matches are found the program continues to the DEFAULT case, if no DEFAULT
*   is found, the program continues to the statement after the switch.
*
*/
    switch (new Date().getDay()) {
                case 4:
                case 5:
                console.log("Weekend Soon!");
                break; 
//Cases 4 & 5 match multiple input values so they share the same output
                case 0:
                case 6://Cases 0 & 6 also share the same output
                console.log("It's the Weekend!");
                break;
                default://If nothing matches, default code runs
                console.log("Looking forward to the Weekend!");
                    }

/*   Switch cases use strict comparison (===).The values must be of the EXACT 
*   same type to match.
*
*/
              var x = "0"; //this is a STRING of 0
                switch (x) {
                    case 0: //this is a NUMBER 0
                    console.log("Off");//Strings and numbers are NOT the same
                    break;
                    case 1:// this is a NUMBER of 1
                    console.log("On");
                    break;
                    default: //nothing matches, default is found, so this runs
                    console.log("No value found");
                    }
                            //=> No value found

                            