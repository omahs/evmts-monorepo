const _PureQuery = {
	abi: [
		{
			inputs: [],
			name: 'IS_SCRIPT',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'num1',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'num2',
					type: 'uint256',
				},
			],
			name: 'run',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
	],
	bytecode: {
		object:
			'0x6080604052600c805460ff1916600117905534801561001d57600080fd5b5060ee8061002c6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80637357f5d2146037578063f8ccbf47146059575b600080fd5b604660423660046087565b6074565b6040519081526020015b60405180910390f35b600c5460659060ff1681565b60405190151581526020016050565b6000607e828460a8565b90505b92915050565b60008060408385031215609957600080fd5b50508035926020909101359150565b808201808211156081577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000811000a',
		sourceMap:
			'72:145:18:-:0;;;758:28:4;;;-1:-1:-1;;758:28:4;782:4;758:28;;;72:145:18;;;;;;;;;;;;;;;;',
		linkReferences: {},
	},
	deployedBytecode: {
		object:
			'0x6080604052348015600f57600080fd5b506004361060325760003560e01c80637357f5d2146037578063f8ccbf47146059575b600080fd5b604660423660046087565b6074565b6040519081526020015b60405180910390f35b600c5460659060ff1681565b60405190151581526020016050565b6000607e828460a8565b90505b92915050565b60008060408385031215609957600080fd5b50508035926020909101359150565b808201808211156081577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000811000a',
		sourceMap:
			'72:145:18:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;107:108;;;;;;:::i;:::-;;:::i;:::-;;;413:25:20;;;401:2;386:18;107:108:18;;;;;;;;758:28:4;;;;;;;;;;;;614:14:20;;607:22;589:41;;577:2;562:18;758:28:4;449:187:20;107:108:18;171:7;197:11;204:4;197;:11;:::i;:::-;190:18;;107:108;;;;;:::o;14:248:20:-;82:6;90;143:2;131:9;122:7;118:23;114:32;111:52;;;159:1;156;149:12;111:52;-1:-1:-1;;182:23:20;;;252:2;237:18;;;224:32;;-1:-1:-1;14:248:20:o;641:279::-;706:9;;;727:10;;;724:190;;;770:77;767:1;760:88;871:4;868:1;861:15;899:4;896:1;889:15',
		linkReferences: {},
	},
	methodIdentifiers: {
		'IS_SCRIPT()': 'f8ccbf47',
		'run(uint256,uint256)': '7357f5d2',
	},
	rawMetadata:
		'{"compiler":{"version":"0.8.17+commit.8df45f5f"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"IS_SCRIPT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num1","type":"uint256"},{"internalType":"uint256","name":"num2","type":"uint256"}],"name":"run","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/pure/PureQuery.s.sol":"PureQuery"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"none"},"optimizer":{"enabled":true,"runs":1000000},"remappings":[":@openzeppelin/=node_modules/@openzeppelin/",":@openzeppelin/contracts/=node_modules/@openzeppelin/contracts/",":ds-test/=lib/forge-std/lib/ds-test/src/",":forge-std/=lib/forge-std/src/"]},"sources":{"lib/forge-std/src/Base.sol":{"keccak256":"0x7f6016716c0c6f49e8163af625290c7ef270a045d9b82be04e269035726d3213","license":"MIT","urls":["bzz-raw://bd050537b58640f8545b319928ee66bef9649d1ebd68a3afa1d28a1ce8cea3dd","dweb:/ipfs/QmbBVxERnZ2ciQuRuZ45czd2DRgouCLEhibLWtC2CrH2j4"]},"lib/forge-std/src/Script.sol":{"keccak256":"0xd566affaba92598bcd059dcb3714a968aeedb365ec0d666815e8b38519e0f433","license":"MIT","urls":["bzz-raw://2fb5f7a97d2a7a06e10c198b60f05e64176eb4ef306b72800c168e7a7ec51693","dweb:/ipfs/Qmcep4r7YEU3BwFJNTTxZsdCVzBYdtcVp8oDtmwLoZGRzP"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xd9f9791f56c2afcd841237417d5a55fa8b69de2c1b528ddbfc7d7823fe136606","license":"MIT","urls":["bzz-raw://f66271850d38488984ec1e38aeb57df1cda53538b2ddd19e2164c767792905f0","dweb:/ipfs/QmetNJMTfgJ7SCNMwfLrZEwnL3xdNaBY5vMiqrRrUWjjes"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x94d97a78c720a10212552c5f7f27c61ea58eb027bd51dd054efae6925e785269","license":"MIT","urls":["bzz-raw://563fd7373c84d700606fc113d535b1a103e7bad4b0412e6cb515d927fb8f57bc","dweb:/ipfs/QmQEjP2DXCXRC4bxXPonLfF8cq1UvMhdQu5X1JynPntvio"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x113bce4d6d0fe7c4e1e3bf2760ba21c075448660a8dae6003f27b9ff86890612","license":"MIT","urls":["bzz-raw://8c8a169ea47398b475696e66d07e354d9997680b5f954418caeeaec5427a131f","dweb:/ipfs/QmSTK6XmjgYZ2CCGZ87AVTowNL3UWfRvqhT6DTbZoKyJzz"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0xb31c4ee03d05c6202f6e354245ac3ab883d954f9f36074902089e1b3e645273d","license":"MIT","urls":["bzz-raw://33bd98bde50b840b8d7d5cebf818176b9f219345078ed5d3bd0071f035efb2e3","dweb:/ipfs/QmPYC7FZvCWCPF2qWg6TXXTTPGEdnT4y5nebPn1AoZ1H4p"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0xc3222299fd637498c81ab5c8e15c9327289d3708fb8a7063dd10a55a8813c9cf","license":"MIT","urls":["bzz-raw://b6f5f818e75e8ae5a67b58cff9b351dd790a72d0a5332fb6f425a3561801b6cc","dweb:/ipfs/QmXJEPtMM1AzwCh6u1o1wL2xdi1qRyxsTLt1eVgeC8Y1QH"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xfd793ebfb854f707ccf9dfec320b3b75d0d73ba54af0dfae727862fe93bc1cfd","license":"MIT","urls":["bzz-raw://9a0a39917aabf39d981b17d1a06c9b82377917c3a0eedce8e9dc00df5c096bf9","dweb:/ipfs/Qme7GpiHd32FFKYNbY4vdhiiciWPV1z1Uwtj1KDQAusxki"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0xcd5706f5a7025825d9fd389c89b49bf571f9abaea8a062dc4048320b5b43bf46","license":"MIT","urls":["bzz-raw://c066485a7d4bd18d44efb4c89274b0959e8066b9a480383a2ce07d7f31555f88","dweb:/ipfs/QmckeYfA5FtAjcxaytq69Dpj6uY57tbQ61kNPPxXi9kgbW"]},"src/pure/PureQuery.s.sol":{"keccak256":"0x3682689155483c5c48befcf5f77a4027ce278b61ddb55f6753d1a3b4d51fab7c","urls":["bzz-raw://0699199c8fafcdbe49a82d0a8781614b6d80e81d790f52534a19ff9d801f6534","dweb:/ipfs/QmNU21jifHrDiqBpR7g851dLYj4DNuPe9Nx2LTeoq3ubwB"]}},"version":1}',
	metadata: {
		compiler: {
			version: '0.8.17+commit.8df45f5f',
		},
		language: 'Solidity',
		output: {
			abi: [
				{
					inputs: [],
					stateMutability: 'view',
					type: 'function',
					name: 'IS_SCRIPT',
					outputs: [
						{
							internalType: 'bool',
							name: '',
							type: 'bool',
						},
					],
				},
				{
					inputs: [
						{
							internalType: 'uint256',
							name: 'num1',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'num2',
							type: 'uint256',
						},
					],
					stateMutability: 'pure',
					type: 'function',
					name: 'run',
					outputs: [
						{
							internalType: 'uint256',
							name: '',
							type: 'uint256',
						},
					],
				},
			],
			devdoc: {
				kind: 'dev',
				methods: {},
				version: 1,
			},
			userdoc: {
				kind: 'user',
				methods: {},
				version: 1,
			},
		},
		settings: {
			remappings: [
				':@openzeppelin/=node_modules/@openzeppelin/',
				':@openzeppelin/contracts/=node_modules/@openzeppelin/contracts/',
				':ds-test/=lib/forge-std/lib/ds-test/src/',
				':forge-std/=lib/forge-std/src/',
			],
			optimizer: {
				enabled: true,
				runs: 1000000,
			},
			metadata: {
				bytecodeHash: 'none',
			},
			compilationTarget: {
				'src/pure/PureQuery.s.sol': 'PureQuery',
			},
			libraries: {},
		},
		sources: {
			'lib/forge-std/src/Base.sol': {
				keccak256:
					'0x7f6016716c0c6f49e8163af625290c7ef270a045d9b82be04e269035726d3213',
				urls: [
					'bzz-raw://bd050537b58640f8545b319928ee66bef9649d1ebd68a3afa1d28a1ce8cea3dd',
					'dweb:/ipfs/QmbBVxERnZ2ciQuRuZ45czd2DRgouCLEhibLWtC2CrH2j4',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/Script.sol': {
				keccak256:
					'0xd566affaba92598bcd059dcb3714a968aeedb365ec0d666815e8b38519e0f433',
				urls: [
					'bzz-raw://2fb5f7a97d2a7a06e10c198b60f05e64176eb4ef306b72800c168e7a7ec51693',
					'dweb:/ipfs/Qmcep4r7YEU3BwFJNTTxZsdCVzBYdtcVp8oDtmwLoZGRzP',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdChains.sol': {
				keccak256:
					'0xd9f9791f56c2afcd841237417d5a55fa8b69de2c1b528ddbfc7d7823fe136606',
				urls: [
					'bzz-raw://f66271850d38488984ec1e38aeb57df1cda53538b2ddd19e2164c767792905f0',
					'dweb:/ipfs/QmetNJMTfgJ7SCNMwfLrZEwnL3xdNaBY5vMiqrRrUWjjes',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdCheats.sol': {
				keccak256:
					'0x94d97a78c720a10212552c5f7f27c61ea58eb027bd51dd054efae6925e785269',
				urls: [
					'bzz-raw://563fd7373c84d700606fc113d535b1a103e7bad4b0412e6cb515d927fb8f57bc',
					'dweb:/ipfs/QmQEjP2DXCXRC4bxXPonLfF8cq1UvMhdQu5X1JynPntvio',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdJson.sol': {
				keccak256:
					'0x113bce4d6d0fe7c4e1e3bf2760ba21c075448660a8dae6003f27b9ff86890612',
				urls: [
					'bzz-raw://8c8a169ea47398b475696e66d07e354d9997680b5f954418caeeaec5427a131f',
					'dweb:/ipfs/QmSTK6XmjgYZ2CCGZ87AVTowNL3UWfRvqhT6DTbZoKyJzz',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdMath.sol': {
				keccak256:
					'0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2',
				urls: [
					'bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92',
					'dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdStorage.sol': {
				keccak256:
					'0xb31c4ee03d05c6202f6e354245ac3ab883d954f9f36074902089e1b3e645273d',
				urls: [
					'bzz-raw://33bd98bde50b840b8d7d5cebf818176b9f219345078ed5d3bd0071f035efb2e3',
					'dweb:/ipfs/QmPYC7FZvCWCPF2qWg6TXXTTPGEdnT4y5nebPn1AoZ1H4p',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/StdUtils.sol': {
				keccak256:
					'0xc3222299fd637498c81ab5c8e15c9327289d3708fb8a7063dd10a55a8813c9cf',
				urls: [
					'bzz-raw://b6f5f818e75e8ae5a67b58cff9b351dd790a72d0a5332fb6f425a3561801b6cc',
					'dweb:/ipfs/QmXJEPtMM1AzwCh6u1o1wL2xdi1qRyxsTLt1eVgeC8Y1QH',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/Vm.sol': {
				keccak256:
					'0xfd793ebfb854f707ccf9dfec320b3b75d0d73ba54af0dfae727862fe93bc1cfd',
				urls: [
					'bzz-raw://9a0a39917aabf39d981b17d1a06c9b82377917c3a0eedce8e9dc00df5c096bf9',
					'dweb:/ipfs/Qme7GpiHd32FFKYNbY4vdhiiciWPV1z1Uwtj1KDQAusxki',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/console.sol': {
				keccak256:
					'0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba',
				urls: [
					'bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70',
					'dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec',
				],
				license: 'MIT',
			},
			'lib/forge-std/src/console2.sol': {
				keccak256:
					'0xcd5706f5a7025825d9fd389c89b49bf571f9abaea8a062dc4048320b5b43bf46',
				urls: [
					'bzz-raw://c066485a7d4bd18d44efb4c89274b0959e8066b9a480383a2ce07d7f31555f88',
					'dweb:/ipfs/QmckeYfA5FtAjcxaytq69Dpj6uY57tbQ61kNPPxXi9kgbW',
				],
				license: 'MIT',
			},
			'src/pure/PureQuery.s.sol': {
				keccak256:
					'0x3682689155483c5c48befcf5f77a4027ce278b61ddb55f6753d1a3b4d51fab7c',
				urls: [
					'bzz-raw://0699199c8fafcdbe49a82d0a8781614b6d80e81d790f52534a19ff9d801f6534',
					'dweb:/ipfs/QmNU21jifHrDiqBpR7g851dLYj4DNuPe9Nx2LTeoq3ubwB',
				],
				license: null,
			},
		},
		version: 1,
	},
	ast: {
		absolutePath: 'src/pure/PureQuery.s.sol',
		id: 23535,
		exportedSymbols: {
			PureQuery: [23534],
			Script: [230],
		},
		nodeType: 'SourceUnit',
		src: '0:218:18',
		nodes: [
			{
				id: 23515,
				nodeType: 'PragmaDirective',
				src: '0:24:18',
				nodes: [],
				literals: ['solidity', '^', '0.8', '.17'],
			},
			{
				id: 23517,
				nodeType: 'ImportDirective',
				src: '26:44:18',
				nodes: [],
				absolutePath: 'lib/forge-std/src/Script.sol',
				file: 'forge-std/Script.sol',
				nameLocation: '-1:-1:-1',
				scope: 23535,
				sourceUnit: 231,
				symbolAliases: [
					{
						foreign: {
							id: 23516,
							name: 'Script',
							nodeType: 'Identifier',
							overloadedDeclarations: [],
							referencedDeclaration: 230,
							src: '34:6:18',
							typeDescriptions: {},
						},
						nameLocation: '-1:-1:-1',
					},
				],
				unitAlias: '',
			},
			{
				id: 23534,
				nodeType: 'ContractDefinition',
				src: '72:145:18',
				nodes: [
					{
						id: 23533,
						nodeType: 'FunctionDefinition',
						src: '107:108:18',
						nodes: [],
						body: {
							id: 23532,
							nodeType: 'Block',
							src: '180:35:18',
							nodes: [],
							statements: [
								{
									expression: {
										commonType: {
											typeIdentifier: 't_uint256',
											typeString: 'uint256',
										},
										id: 23530,
										isConstant: false,
										isLValue: false,
										isPure: false,
										lValueRequested: false,
										leftExpression: {
											id: 23528,
											name: 'num1',
											nodeType: 'Identifier',
											overloadedDeclarations: [],
											referencedDeclaration: 23521,
											src: '197:4:18',
											typeDescriptions: {
												typeIdentifier: 't_uint256',
												typeString: 'uint256',
											},
										},
										nodeType: 'BinaryOperation',
										operator: '+',
										rightExpression: {
											id: 23529,
											name: 'num2',
											nodeType: 'Identifier',
											overloadedDeclarations: [],
											referencedDeclaration: 23523,
											src: '204:4:18',
											typeDescriptions: {
												typeIdentifier: 't_uint256',
												typeString: 'uint256',
											},
										},
										src: '197:11:18',
										typeDescriptions: {
											typeIdentifier: 't_uint256',
											typeString: 'uint256',
										},
									},
									functionReturnParameters: 23527,
									id: 23531,
									nodeType: 'Return',
									src: '190:18:18',
								},
							],
						},
						functionSelector: '7357f5d2',
						implemented: true,
						kind: 'function',
						modifiers: [],
						name: 'run',
						nameLocation: '116:3:18',
						parameters: {
							id: 23524,
							nodeType: 'ParameterList',
							parameters: [
								{
									constant: false,
									id: 23521,
									mutability: 'mutable',
									name: 'num1',
									nameLocation: '128:4:18',
									nodeType: 'VariableDeclaration',
									scope: 23533,
									src: '120:12:18',
									stateVariable: false,
									storageLocation: 'default',
									typeDescriptions: {
										typeIdentifier: 't_uint256',
										typeString: 'uint256',
									},
									typeName: {
										id: 23520,
										name: 'uint256',
										nodeType: 'ElementaryTypeName',
										src: '120:7:18',
										typeDescriptions: {
											typeIdentifier: 't_uint256',
											typeString: 'uint256',
										},
									},
									visibility: 'internal',
								},
								{
									constant: false,
									id: 23523,
									mutability: 'mutable',
									name: 'num2',
									nameLocation: '142:4:18',
									nodeType: 'VariableDeclaration',
									scope: 23533,
									src: '134:12:18',
									stateVariable: false,
									storageLocation: 'default',
									typeDescriptions: {
										typeIdentifier: 't_uint256',
										typeString: 'uint256',
									},
									typeName: {
										id: 23522,
										name: 'uint256',
										nodeType: 'ElementaryTypeName',
										src: '134:7:18',
										typeDescriptions: {
											typeIdentifier: 't_uint256',
											typeString: 'uint256',
										},
									},
									visibility: 'internal',
								},
							],
							src: '119:28:18',
						},
						returnParameters: {
							id: 23527,
							nodeType: 'ParameterList',
							parameters: [
								{
									constant: false,
									id: 23526,
									mutability: 'mutable',
									name: '',
									nameLocation: '-1:-1:-1',
									nodeType: 'VariableDeclaration',
									scope: 23533,
									src: '171:7:18',
									stateVariable: false,
									storageLocation: 'default',
									typeDescriptions: {
										typeIdentifier: 't_uint256',
										typeString: 'uint256',
									},
									typeName: {
										id: 23525,
										name: 'uint256',
										nodeType: 'ElementaryTypeName',
										src: '171:7:18',
										typeDescriptions: {
											typeIdentifier: 't_uint256',
											typeString: 'uint256',
										},
									},
									visibility: 'internal',
								},
							],
							src: '170:9:18',
						},
						scope: 23534,
						stateMutability: 'pure',
						virtual: false,
						visibility: 'external',
					},
				],
				abstract: false,
				baseContracts: [
					{
						baseName: {
							id: 23518,
							name: 'Script',
							nameLocations: ['94:6:18'],
							nodeType: 'IdentifierPath',
							referencedDeclaration: 230,
							src: '94:6:18',
						},
						id: 23519,
						nodeType: 'InheritanceSpecifier',
						src: '94:6:18',
					},
				],
				canonicalName: 'PureQuery',
				contractDependencies: [],
				contractKind: 'contract',
				fullyImplemented: true,
				linearizedBaseContracts: [23534, 230, 193, 178, 5609, 2314, 766],
				name: 'PureQuery',
				nameLocation: '81:9:18',
				scope: 23535,
				usedErrors: [],
			},
		],
	},
	id: 18,
} as const
export declare const PureQuery: typeof _PureQuery
