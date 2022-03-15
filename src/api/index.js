import videoMeta from '../stub/videoMeta.json';
import coursesMeta from '../stub/coursesMeta.json';
import chaptersMetaWithId from '../stub/chaptersMetaWithId.json';
import discussions from '../stub/discussions.json';
import notes from '../stub/notes.json';

const getVideoMeta = () => {
    return Promise.resolve(videoMeta);
};

const getCoursesMeta = () => {
    return Promise.resolve(coursesMeta);
};

const getChapterMetaWithId = () => {
    return Promise.resolve(chaptersMetaWithId);
};

const getDiscussions = () => {
    return Promise.resolve(discussions);
}

const getNotes = () => {
    return Promise.resolve(notes);
}

export {
    getVideoMeta,
    getCoursesMeta,
    getChapterMetaWithId,
    getDiscussions,
    getNotes
};
