const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // unique: true,
      required: true,
      trim: true
    },
    source: {
      type: String
    },
    function: {
      type: String,
      enum: ['natural', 'chemical'],
      required: true
    },
    score: {
      type: Number,
      min: 1,
      max: 10
    },
    concerns: [
      {
        type: String,
        enum: [
          'Allergies/Immunotoxicity',
          'Endocrine Disruption',
          'Contamination Concerns',
          'Irritation (Skin, Eyes, or Lungs)',
          'Miscellaneous',
          'Occupational Hazards',
          'Persistence & Bioaccumulation',
          'Use Restrictions',
          'Multiple, Additive Exposure Sources',
          'Organ System Toxicity(Non-Reproductive)',
          'Neurotoxicity',
          'Ecotoxicology',
          'Cancer',
          'Developmental & Reproductive Toxicity',
          'Enhanced Skin Absorption'
        ]
      }
    ],
    note: String
  },
  {
    timestamps: true
  }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
