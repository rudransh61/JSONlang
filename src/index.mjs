export function start(inputJson) {
    // const check = 1;
    // console.log(check);

    //check for END 
    var alloperations = Object.keys(inputJson);
    var alloperands = Object.values(inputJson);


    var Output = {'output':[]};

    // console.log(alloperations);
    // console.log(alloperands);
    for (var i = 0; i < alloperations.length; i++) {
        //check comment();
        // checkPrint();
        //check end ();

        if (alloperations[i] == '#') {
            continue;
            //ignore
        }

        else if (alloperations[i] == 'PRINT') {
            Output.output+= alloperands[i];
            // console.log(Output.output)

        }

    }

        // console.log('operands : ',alloperations);
        // console.log('operations : ',alloperands);
        // console.log('output : ',Output);

    return Output;


}