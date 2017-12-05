    function storeSequences(dataRows){

    let sequences = new Set();
    let sequencesStrings = new Set();

    for (let dataRow of dataRows){
        let numsArr = dataRow.split(/[\s*,\[\]]/).filter(n => n != '').map(n => Number(n));
        let sortedNums = numsArr.sort((a, b) => b - a);
 
        let oldSeqLength = sequencesStrings.size;
        sequencesStrings.add(sortedNums.toString());
        if (oldSeqLength != sequencesStrings.size)
            sequences.add(sortedNums);
    }
 
    let orderedSequences = Array.from(sequences).sort((a, b) => a.length - b.length);

    for (let seq of orderedSequences){
        console.log(`[${seq.join(', ')}]`);
    }
}
