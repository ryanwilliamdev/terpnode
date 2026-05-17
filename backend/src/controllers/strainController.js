import { Strain, StrainNote } from '../models/Strain.js'; // GET ALL STRAINS


export const getAllStrains = async (req, res) => { // READ
    try {
        const strains = await Strain.find();
        res.status(200).json(strains);
    } catch (error) {
        console.error('Error fetching strains from getAllStrains controller:', error);
        res.status(500).json({ message: error.message });
    }
};

export const getAllStrainNotes = async (req, res) => { // READ
    try {
        const strainNotes = await StrainNote.find();
        res.status(200).json(strainNotes);
    } catch (error) {
        console.error('Error fetching strain notes from getAllStrainNotes controller:', error);
        res.status(500).json({ message: error.message });
    }
};

export const addStrain = async (req, res) => { // CREATE
    try {
        const { name, type, cultivator, terpenes, flavor } = req.body;
        const strain = await Strain.create({ name, type, cultivator, terpenes, flavor });
        res.status(201).json(strain);
    } catch (error) {
        console.error('Error adding strain from addStrain controller:', error);
        res.status(500).json({ message: error.message });
    }
};

export const addStrainNote = async (req, res) => { // CREATE
    try {
        const { strain, note } = req.body;
        const strainNote = await StrainNote.create({ strain, note });
        res.status(201).json(strainNote);
    } catch (error) {
        console.error('Error adding strain note from addStrainNote controller:', error);
        res.status(500).json({ message: error.message });
    }
};

export const updateStrain = async (req, res) => { // UPDATE
    try {
        const { id } = req.params;
        const { name, type, cultivator, terpenes, flavor } = req.body;
        const strain = await Strain.findByIdAndUpdate(id, { name, type, cultivator, terpenes, flavor }, { new: true });
        res.status(200).json(strain);
    } catch (error) {
        console.error('Error updating strain from updateStrain controller:', error);
        res.status(500).json({ message: error.message });
    }
};


export const deleteStrain = async (req, res) => { // DELETE
    await res.status(200).json({ message: 'Strain deleted successfully!' });
};