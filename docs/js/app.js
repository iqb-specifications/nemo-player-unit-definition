
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "nemo-player-unit-definition",
    "description": "Specification for the unit definition of the nemo player.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "nemo-unit-definition@0.3",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Nemo Player Unit Definition",
        "description": "Specification for the unit definition of the nemo player.",
        "type": "object",
        "properties": {
          "id": {
            "const": "nemo-unit-definition",
            "description": "Ensures that this is the right definition type",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "version": {
            "type": "string",
            "default": "0.3.0",
            "description": "Version to better support legacy definitions.",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "backgroundColor": {
            "type": "string",
            "description": "web-color",
            "examples": [
              "#ffaa56",
              "#ff1"
            ],
            "default": "#fff",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "continueButtonShow": {
            "type": "string",
            "description": "Rule if the navigation button to continue is presented",
            "enum": [
              "NO",
              "ALWAYS",
              "ON_INTERACTION",
              "ON_ANY_RESPONSE",
              "ON_FULL_CREDIT"
            ],
            "default": "ALWAYS",
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "mainAudio": {
            "type": "object",
            "description": "Parameters and source for main audio sequence used via upper left button.",
            "properties": {
              "audioSource": {
                "type": "string",
                "description": "base64 coded string ",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "firstClickLayer": {
                "type": "boolean",
                "description": "If true, an overlapping click area covers all available player space to catch first click to start audio.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "animateButton": {
                "type": "boolean",
                "description": "If true, the audio trigger button is a bit moving to demand attention.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "required": [
              "audioSource"
            ],
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "interactionType": {
            "type": "string",
            "description": "Type of interaction",
            "enum": [
              "BUTTONS",
              "SYLLABIFY",
              "WORD_SELECT",
              "DROP",
              "PHONETICS",
              "WRITE",
              "FIND_ON_IMAGE"
            ],
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "interactionParameters": {
            "description": "Every interaction type needs a different set of parameters.",
            "oneOf": [
              {
                "type": "object",
                "description": "These parameters will be used for interactionType BUTTONS",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "buttons",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "size": {
                    "type": "string",
                    "description": "Size of button",
                    "enum": [
                      "BIG",
                      "MEDIUM",
                      "SMALL"
                    ],
                    "default": "MEDIUM",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "gap": {
                    "type": "string",
                    "description": "Size of the gap between buttons.",
                    "enum": [
                      "BIG",
                      "MEDIUM",
                      "SMALL"
                    ],
                    "default": "MEDIUM",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "multiSelect": {
                    "type": "boolean",
                    "description": "If true, more than one option can be selected.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "numberOfRows": {
                    "type": "integer",
                    "description": "The options are arranged in exact this number of rows regardless of the given space (no responsiveness). If an odd number of options is given, the upper row will contain of more options.",
                    "default": 1,
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "options": {
                    "type": "array",
                    "description": "Each option specifies one button.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "text": {
                          "type": "string",
                          "description": "If image or icon is given too, this text is used as alt.",
                          "x-parser-schema-id": "<anonymous-schema-19>"
                        },
                        "imageSource": {
                          "type": "string",
                          "description": "Image base64-coded",
                          "x-parser-schema-id": "<anonymous-schema-20>"
                        },
                        "icon": {
                          "type": "string",
                          "description": "Icon provided by player",
                          "enum": [
                            "CHECK_GREEN",
                            "CLOSE_RED"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-21>"
                        }
                      },
                      "x-parser-schema-id": "<anonymous-schema-18>"
                    },
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  }
                },
                "required": [
                  "options"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType SYLLABIFY",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "syllabify",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed left-hand.",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If image or icon is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  },
                  "numberOfOptions": {
                    "type": "integer",
                    "description": "Number of options. Every option carries a growing number of hand clapping images.",
                    "default": 5,
                    "x-parser-schema-id": "<anonymous-schema-26>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType WORD_SELECT",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "wordSelect",
                    "x-parser-schema-id": "<anonymous-schema-28>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed left or at top.",
                    "x-parser-schema-id": "<anonymous-schema-29>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If an image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-30>"
                  },
                  "buttonsAsRow": {
                    "type": "boolean",
                    "description": "If true, the buttons are arranged side by side in a row at the bottom. If false, they form a column right-hand.",
                    "default": false,
                    "x-parser-schema-id": "<anonymous-schema-31>"
                  },
                  "options": {
                    "type": "array",
                    "description": "Each option specifies one button.",
                    "items": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items",
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-32>"
                  }
                },
                "required": [
                  "options"
                ],
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType DROP",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "drop",
                    "x-parser-schema-id": "<anonymous-schema-34>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed at the bottom.",
                    "x-parser-schema-id": "<anonymous-schema-35>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If an image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-36>"
                  },
                  "options": {
                    "type": "array",
                    "description": "Each option specifies one button.",
                    "items": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items",
                    "minItems": 1,
                    "x-parser-schema-id": "<anonymous-schema-37>"
                  }
                },
                "required": [
                  "options"
                ],
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType PHONETICS",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "phonetics",
                    "x-parser-schema-id": "<anonymous-schema-39>"
                  },
                  "numberOfOptions": {
                    "type": "integer",
                    "description": "Number of options.",
                    "default": 7,
                    "x-parser-schema-id": "<anonymous-schema-40>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-38>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType WRITE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "write",
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, placed at the top.",
                    "x-parser-schema-id": "<anonymous-schema-43>"
                  },
                  "text": {
                    "type": "string",
                    "description": "If image is given too, this text is used as alt.",
                    "x-parser-schema-id": "<anonymous-schema-44>"
                  },
                  "addBackspaceKey": {
                    "type": "boolean",
                    "description": "If true, a backspace key is added to the keybboard.",
                    "default": true,
                    "x-parser-schema-id": "<anonymous-schema-45>"
                  },
                  "addUmlautKeys": {
                    "type": "boolean",
                    "description": "If true, keys for umlauts are added to the keyboard.",
                    "default": true,
                    "x-parser-schema-id": "<anonymous-schema-46>"
                  },
                  "keysToAdd": {
                    "type": "array",
                    "description": "All chars/strings in the list are added in a new key row at the bottom. Example: Graphemes",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "x-parser-schema-id": "<anonymous-schema-48>"
                    },
                    "examples": [
                      "eu",
                      "au",
                      "ei",
                      "ch",
                      "sch",
                      "ng"
                    ],
                    "default": [],
                    "x-parser-schema-id": "<anonymous-schema-47>"
                  },
                  "maxInputLength": {
                    "type": "integer",
                    "description": "Maximal number of characters for input.",
                    "default": 10,
                    "x-parser-schema-id": "<anonymous-schema-49>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-41>"
              },
              {
                "type": "object",
                "description": "These parameters will be used for interactionType FIND_ON_IMAGE",
                "properties": {
                  "variableId": {
                    "type": "string",
                    "description": "Name of the variable stored as id in the response data object.",
                    "default": "write",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  },
                  "imageSource": {
                    "type": "string",
                    "description": "Image base64-coded, filling space as much as possible.",
                    "x-parser-schema-id": "<anonymous-schema-52>"
                  },
                  "text": {
                    "type": "string",
                    "description": "Placed below the image.",
                    "x-parser-schema-id": "<anonymous-schema-53>"
                  },
                  "gridColumns": {
                    "type": "integer",
                    "description": "Number of columns of the virtual grid placed over the image.",
                    "default": 15,
                    "x-parser-schema-id": "<anonymous-schema-54>"
                  },
                  "gridRows": {
                    "type": "integer",
                    "description": "Number of rows of the virtual grid placed over the image.",
                    "default": 10,
                    "x-parser-schema-id": "<anonymous-schema-55>"
                  }
                },
                "required": [
                  "imageSource"
                ],
                "x-parser-schema-id": "<anonymous-schema-50>"
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-10>"
          },
          "coding": {
            "type": "array",
            "description": "Rules for coding and scoring the values",
            "items": {
              "type": "object",
              "properties": {
                "variableId": {
                  "type": "string",
                  "description": "Name of the variable to be coded.",
                  "x-parser-schema-id": "<anonymous-schema-58>"
                },
                "source": {
                  "type": "string",
                  "description": "Where the value for evaluation comes from.",
                  "enum": [
                    "VALUE",
                    "VALUE_TO_UPPER",
                    "SUM",
                    "LENGTH"
                  ],
                  "default": "VALUE",
                  "x-parser-schema-id": "<anonymous-schema-59>"
                },
                "codes": {
                  "type": "array",
                  "description": "First true code will be taken. If not code matches, code and score will be '0'. If the given code list includes code '0', the next available code will be taken.",
                  "items": {
                    "type": "object",
                    "description": "If more than one rule is given, the first will go.",
                    "properties": {
                      "rule": {
                        "description": "Operator and value to compare with",
                        "type": "object",
                        "oneOf": [
                          {
                            "type": "object",
                            "properties": {
                              "equalsString": {
                                "type": "string",
                                "x-parser-schema-id": "<anonymous-schema-64>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-63>"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "equalsNumber": {
                                "type": "number",
                                "x-parser-schema-id": "<anonymous-schema-66>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-65>"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "greaterThan": {
                                "type": "number",
                                "x-parser-schema-id": "<anonymous-schema-68>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-67>"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "lessThan": {
                                "type": "number",
                                "x-parser-schema-id": "<anonymous-schema-70>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-69>"
                          }
                        ],
                        "x-parser-schema-id": "<anonymous-schema-62>"
                      },
                      "code": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-71>"
                      },
                      "score": {
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-72>"
                      }
                    },
                    "required": [
                      "rule",
                      "code",
                      "score"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-61>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-60>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-57>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-56>"
          },
          "audioFeedback": {
            "type": "object",
            "description": "",
            "properties": {
              "continueButtonAsTrigger": {
                "type": "boolean",
                "description": "This will show the continue button unless other rules defined in 'continueButtonShow'. Audio feedback will not be given on every response but on continue button click. After playing feedback, the continue button triggers following rules defined in 'continueButtonShow'.",
                "default": false,
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              "feedback": {
                "type": "array",
                "description": "The feedback will be played for the variable just changed.",
                "items": {
                  "type": "object",
                  "properties": {
                    "variableId": {
                      "type": "string",
                      "description": "Name of the variable to trigger the feedback.",
                      "x-parser-schema-id": "<anonymous-schema-77>"
                    },
                    "source": {
                      "type": "string",
                      "description": "Where the value for evaluation comes from.",
                      "enum": [
                        "VALUE",
                        "CODE",
                        "SCORE"
                      ],
                      "default": "CODE",
                      "x-parser-schema-id": "<anonymous-schema-78>"
                    },
                    "rule": "$ref:$.components.schemas.metadata-values.properties.coding.items.properties.codes.items.properties.rule",
                    "audioSource": {
                      "type": "string",
                      "description": "base64 coded string for audio sequence used via upper left button",
                      "x-parser-schema-id": "<anonymous-schema-79>"
                    }
                  },
                  "required": [
                    "variableId",
                    "rule",
                    "audioSource"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-76>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-75>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-73>"
          }
        },
        "required": [
          "id",
          "interactionType"
        ],
        "definitions": {
          "option": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0].properties.options.items",
          "parametersButtons": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[0]",
          "parametersSyllabify": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[1]",
          "parametersWordSelect": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[2]",
          "parametersDrop": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[3]",
          "parametersPhonetics": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[4]",
          "parametersWrite": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[5]",
          "parametersFindOnImage": "$ref:$.components.schemas.metadata-values.properties.interactionParameters.oneOf[6]",
          "rule": "$ref:$.components.schemas.metadata-values.properties.coding.items.properties.codes.items.properties.rule",
          "code": "$ref:$.components.schemas.metadata-values.properties.coding.items.properties.codes.items",
          "coding": "$ref:$.components.schemas.metadata-values.properties.coding.items",
          "audioFeedback": "$ref:$.components.schemas.metadata-values.properties.audioFeedback.properties.feedback.items"
        },
        "x-parser-schema-id": "nemo-unit-definition@0.3"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  