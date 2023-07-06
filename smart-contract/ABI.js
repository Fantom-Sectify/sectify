const abi =
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_voterId",
                "type": "uint256"
            },
            {
                "internalType": "enum Sectify.Office",
                "name": "_office",
                "type": "uint8"
            }],
            "name": "accrediteVoter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "enum Sectify.Office", "name": "_office", "type": "uint8" },
            { "internalType": "uint256", "name": "candidateOfChoice", "type": "uint256" },

            { "internalType": "uint256", "name": "_voterId", "type": "uint256" }],
            "name": "castVote", "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "enum Sectify.Office",
                "name": "_office", "type": "uint8"
            }],
            "name": "collatePollResults",
            "outputs": [], "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
            "name": "getACandidate",
            "outputs": [{
                "components": [{
                    "internalType": "uint256",
                    "name": "candidateId", "type": "uint256"
                },
                { "internalType": "address", "name": "candidateAddress", "type": "address" },
                { "internalType": "uint256", "name": "candidateVotes", "type": "uint256" },
                { "internalType": "enum Sectify.Office", "name": "officeOfChoice", "type": "uint8" },
                { "internalType": "enum Sectify.Verify", "name": "verificationStatus", "type": "uint8" }], "internalType": "struct Sectify.Candidate", "name": "", "type": "tuple"
            }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "getAVoter", "outputs": [{
                "components": [{ "internalType": "uint256", "name": "voterId", "type": "uint256" },
                { "internalType": "address", "name": "voterAccount", "type": "address" }, { "internalType": "enum Sectify.Office[]", "name": "officesVotedFor", "type": "uint8[]" }], "internalType": "struct Sectify.Voter", "name": "", "type": "tuple"
            }], "stateMutability": "view", "type": "function"
        },
        { "inputs": [], "name": "getAllCandidates", "outputs": [], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllVoters", "outputs": [], "stateMutability": "view", "type": "function" }, {
            "inputs": [{ "internalType": "enum Sectify.Office", "name": "_office", "type": "uint8" }],
            "name": "getWinner", "outputs": [{
                "components": [{ "internalType": "uint256", "name": "candidateId", "type": "uint256" }, { "internalType": "address", "name": "candidateAddress", "type": "address" }, { "internalType": "uint256", "name": "candidateVotes", "type": "uint256" }, { "internalType": "enum Sectify.Office", "name": "officeOfChoice", "type": "uint8" },
                { "internalType": "enum Sectify.Verify", "name": "verificationStatus", "type": "uint8" }], "internalType": "struct Sectify.Candidate", "name": "", "type": "tuple"
            }], "stateMutability": "view", "type": "function"
        },
        {
            "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "enum Sectify.Office", "name": "_vyingFor", "type": "uint8" }],
            "name": "registerCandidate", "outputs": [], "stateMutability": "nonpayable", "type": "function"
        },
        {
            "inputs": [{ "internalType": "uint256", "name": "_start", "type": "uint256" }, { "internalType": "uint256", "name": "_duration", "type": "uint256" }, { "internalType": "enum Sectify.Office", "name": "_office", "type": "uint8" }],
            "name": "setElectionSchedule", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function"
        },
        { "inputs": [{ "internalType": "uint256", "name": "_candidateId", "type": "uint256" }], "name": "verifyCandidate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
export default abi;