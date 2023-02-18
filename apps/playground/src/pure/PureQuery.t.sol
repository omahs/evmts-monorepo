// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {Script} from "forge-std/Script.sol";

contract PureQuery is Script {
    function run() pure external returns (uint256) {
        return 5;
    }
}