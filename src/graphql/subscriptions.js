/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonSource = /* GraphQL */ `
  subscription OnCreateLessonSource {
    onCreateLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const onUpdateLessonSource = /* GraphQL */ `
  subscription OnUpdateLessonSource {
    onUpdateLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const onDeleteLessonSource = /* GraphQL */ `
  subscription OnDeleteLessonSource {
    onDeleteLessonSource {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const onCreateLessonLink = /* GraphQL */ `
  subscription OnCreateLessonLink {
    onCreateLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const onUpdateLessonLink = /* GraphQL */ `
  subscription OnUpdateLessonLink {
    onUpdateLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const onDeleteLessonLink = /* GraphQL */ `
  subscription OnDeleteLessonLink {
    onDeleteLessonLink {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags {
    onCreateTags {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags {
    onUpdateTags {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags {
    onDeleteTags {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
      id
      slug
      title
      title_callout_1
      title_callout_2
      title_text
      title_button_1_text
      title_button_1_link
      title_button_2_text
      title_button_2_link
      title_image
      courses {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      whoText
      courses_total
      hours_total
      ceus_total
      brochure_link
      video
      price_full
      price_monthly
      price_features
      lmsLink
      demoLink
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      slug
      category
      title
      subhead
      media
      video
      hour
      lessons
      videos
      price
      articles {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      certificate {
        items {
          id
          certificateId
          courseId
          certificate {
            id
            slug
            title
            title_callout_1
            title_callout_2
            title_text
            title_button_1_text
            title_button_1_link
            title_button_2_text
            title_button_2_link
            title_image
            courses {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            whoText
            courses_total
            hours_total
            ceus_total
            brochure_link
            video
            price_full
            price_monthly
            price_features
            lmsLink
            demoLink
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
      id
      slug
      title
      subhead
      type
      media
      mediaType
      slides
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          course {
            id
            slug
            category
            title
            subhead
            media
            video
            hour
            lessons
            videos
            price
            articles {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            certificate {
              items {
                id
                certificateId
                courseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          article {
            id
            slug
            title
            subhead
            media
            seoImage
            content
            tags {
              items {
                id
                tag
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonTagsId
                blogTagsId
                articleTagsId
              }
              nextToken
              startedAt
            }
            relatedCourses {
              items {
                id
                courseId
                articleId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDayInLifeItem = /* GraphQL */ `
  subscription OnCreateDayInLifeItem {
    onCreateDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const onUpdateDayInLifeItem = /* GraphQL */ `
  subscription OnUpdateDayInLifeItem {
    onUpdateDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const onDeleteDayInLifeItem = /* GraphQL */ `
  subscription OnDeleteDayInLifeItem {
    onDeleteDayInLifeItem {
      id
      name
      desc
      icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      careerDayInLifeId
    }
  }
`;
export const onCreateCareer = /* GraphQL */ `
  subscription OnCreateCareer {
    onCreateCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCareer = /* GraphQL */ `
  subscription OnUpdateCareer {
    onUpdateCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCareer = /* GraphQL */ `
  subscription OnDeleteCareer {
    onDeleteCareer {
      id
      slug
      title
      altName
      subhead
      media
      dayInLife {
        items {
          id
          name
          desc
          icon
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          careerDayInLifeId
        }
        nextToken
        startedAt
      }
      cmpmCopy
      cpsCopy
      apcCopy
      coreCopy
      electiveCopy
      freeCopy
      beverageCopy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAPS = /* GraphQL */ `
  subscription OnCreateAPS {
    onCreateAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAPS = /* GraphQL */ `
  subscription OnUpdateAPS {
    onUpdateAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAPS = /* GraphQL */ `
  subscription OnDeleteAPS {
    onDeleteAPS {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          apsHistory {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          company {
            id
            name
            Employees {
              items {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              nextToken
              startedAt
            }
            website
            email
            phone
            street_1
            street_2
            city
            state
            zip
            apsID {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      title
      company
      email
      office
      cell
      picture
      linkedin
      companyID
      apss {
        items {
          id
          aPSId
          userId
          aPS {
            id
            Registrants {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Sponsors {
              items {
                id
                aPSId
                companyId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Speakers {
              items {
                firstName
                lastName
                email
                company
                title
                phone
                linkedin
                bio
                presentationTitle
                presentationSummary
                headshot
                mediaConsent
                privacyConsent
                id
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                aPSSpeakersId
              }
              nextToken
              startedAt
            }
            year
            codes {
              code
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      cmpmFormID
      cmpmForm {
        id
        user {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        firstName
        lastName
        email
        phone
        streetAddress
        addressExtra
        city
        state
        country
        companyName
        companyTitle
        linkedin
        background
        whyPackaging
        areaOfInterest
        sessionApplying
        referral
        payment
        yearGoals
        cmpmGoals
        moreAboutYou
        createdOn
        updatedOn
        _version
        _deleted
        _lastChangedAt
        cMPMFormUserId
      }
      instructorId {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      studentId {
        id
        studentId
        student {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        courseEnrolled {
          items {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const onCreateCMPMForm = /* GraphQL */ `
  subscription OnCreateCMPMForm {
    onCreateCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const onUpdateCMPMForm = /* GraphQL */ `
  subscription OnUpdateCMPMForm {
    onUpdateCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const onDeleteCMPMForm = /* GraphQL */ `
  subscription OnDeleteCMPMForm {
    onDeleteCMPMForm {
      id
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      firstName
      lastName
      email
      phone
      streetAddress
      addressExtra
      city
      state
      country
      companyName
      companyTitle
      linkedin
      background
      whyPackaging
      areaOfInterest
      sessionApplying
      referral
      payment
      yearGoals
      cmpmGoals
      moreAboutYou
      createdOn
      updatedOn
      _version
      _deleted
      _lastChangedAt
      cMPMFormUserId
    }
  }
`;
export const onCreateAPSSpeaker = /* GraphQL */ `
  subscription OnCreateAPSSpeaker {
    onCreateAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const onUpdateAPSSpeaker = /* GraphQL */ `
  subscription OnUpdateAPSSpeaker {
    onUpdateAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const onDeleteAPSSpeaker = /* GraphQL */ `
  subscription OnDeleteAPSSpeaker {
    onDeleteAPSSpeaker {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const onCreateLMSCirriculum = /* GraphQL */ `
  subscription OnCreateLMSCirriculum {
    onCreateLMSCirriculum {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLMSCirriculum = /* GraphQL */ `
  subscription OnUpdateLMSCirriculum {
    onUpdateLMSCirriculum {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLMSCirriculum = /* GraphQL */ `
  subscription OnDeleteLMSCirriculum {
    onDeleteLMSCirriculum {
      id
      title
      Courses {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLMSCourse = /* GraphQL */ `
  subscription OnCreateLMSCourse {
    onCreateLMSCourse {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const onUpdateLMSCourse = /* GraphQL */ `
  subscription OnUpdateLMSCourse {
    onUpdateLMSCourse {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const onDeleteLMSCourse = /* GraphQL */ `
  subscription OnDeleteLMSCourse {
    onDeleteLMSCourse {
      id
      courseId
      Cirriculum {
        items {
          id
          lMSCirriculumId
          lMSCourseId
          lMSCirriculum {
            id
            title
            Courses {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Lessons {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Instructors {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      price
      hours
      videos
      seoImage
      description
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentCourseEnrolledId
    }
  }
`;
export const onCreateLMSLesson = /* GraphQL */ `
  subscription OnCreateLMSLesson {
    onCreateLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonVideoTimestampsId
          }
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          Course {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          subheadline
          objectives {
            items {
              id
              objective
              completed
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonObjectivesId
            }
            nextToken
            startedAt
          }
          mediaType
          slides {
            items {
              id
              slideSource
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonSlidesId
            }
            nextToken
            startedAt
          }
          video {
            id
            timestamps {
              items {
                id
                time
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonVideoTimestampsId
              }
              nextToken
              startedAt
            }
            lessonId
            lesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const onUpdateLMSLesson = /* GraphQL */ `
  subscription OnUpdateLMSLesson {
    onUpdateLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonVideoTimestampsId
          }
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          Course {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          subheadline
          objectives {
            items {
              id
              objective
              completed
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonObjectivesId
            }
            nextToken
            startedAt
          }
          mediaType
          slides {
            items {
              id
              slideSource
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonSlidesId
            }
            nextToken
            startedAt
          }
          video {
            id
            timestamps {
              items {
                id
                time
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonVideoTimestampsId
              }
              nextToken
              startedAt
            }
            lessonId
            lesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const onDeleteLMSLesson = /* GraphQL */ `
  subscription OnDeleteLMSLesson {
    onDeleteLMSLesson {
      id
      title
      Course {
        items {
          id
          lMSCourseId
          lMSLessonId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          lMSLesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      subheadline
      objectives {
        items {
          id
          objective
          completed
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonObjectivesId
        }
        nextToken
        startedAt
      }
      mediaType
      slides {
        items {
          id
          slideSource
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonSlidesId
        }
        nextToken
        startedAt
      }
      video {
        id
        timestamps {
          items {
            id
            time
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonVideoTimestampsId
          }
          nextToken
          startedAt
        }
        lessonId
        lesson {
          id
          title
          Course {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          subheadline
          objectives {
            items {
              id
              objective
              completed
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonObjectivesId
            }
            nextToken
            startedAt
          }
          mediaType
          slides {
            items {
              id
              slideSource
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonSlidesId
            }
            nextToken
            startedAt
          }
          video {
            id
            timestamps {
              items {
                id
                time
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lessonVideoTimestampsId
              }
              nextToken
              startedAt
            }
            lessonId
            lesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lMSLessonVideoId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      percentComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonVideoId
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          Cirriculum {
            items {
              id
              lMSCirriculumId
              lMSCourseId
              lMSCirriculum {
                id
                title
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Lessons {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Instructors {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          Cirriculum {
            items {
              id
              lMSCirriculumId
              lMSCourseId
              lMSCirriculum {
                id
                title
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Lessons {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Instructors {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      studentId
      student {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      courseEnrolled {
        items {
          id
          courseId
          Cirriculum {
            items {
              id
              lMSCirriculumId
              lMSCourseId
              lMSCirriculum {
                id
                title
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Lessons {
            items {
              id
              lMSCourseId
              lMSLessonId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              lMSLesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          Instructors {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          price
          hours
          videos
          seoImage
          description
          percentComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentCourseEnrolledId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateInstructor = /* GraphQL */ `
  subscription OnCreateInstructor {
    onCreateInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInstructor = /* GraphQL */ `
  subscription OnUpdateInstructor {
    onUpdateInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInstructor = /* GraphQL */ `
  subscription OnDeleteInstructor {
    onDeleteInstructor {
      id
      userId
      instructor {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      coursesTaught {
        items {
          id
          lMSCourseId
          instructorId
          lMSCourse {
            id
            courseId
            Cirriculum {
              items {
                id
                lMSCirriculumId
                lMSCourseId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Lessons {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            Instructors {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            price
            hours
            videos
            seoImage
            description
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            studentCourseEnrolledId
          }
          instructor {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateObjective = /* GraphQL */ `
  subscription OnCreateObjective {
    onCreateObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onUpdateObjective = /* GraphQL */ `
  subscription OnUpdateObjective {
    onUpdateObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onDeleteObjective = /* GraphQL */ `
  subscription OnDeleteObjective {
    onDeleteObjective {
      id
      objective
      completed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonObjectivesId
    }
  }
`;
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
      id
      slideSource
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lMSLessonSlidesId
    }
  }
`;
export const onCreateLessonVideo = /* GraphQL */ `
  subscription OnCreateLessonVideo {
    onCreateLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLessonVideo = /* GraphQL */ `
  subscription OnUpdateLessonVideo {
    onUpdateLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLessonVideo = /* GraphQL */ `
  subscription OnDeleteLessonVideo {
    onDeleteLessonVideo {
      id
      timestamps {
        items {
          id
          time
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonVideoTimestampsId
        }
        nextToken
        startedAt
      }
      lessonId
      lesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTimestamp = /* GraphQL */ `
  subscription OnCreateTimestamp {
    onCreateTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onUpdateTimestamp = /* GraphQL */ `
  subscription OnUpdateTimestamp {
    onUpdateTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onDeleteTimestamp = /* GraphQL */ `
  subscription OnDeleteTimestamp {
    onDeleteTimestamp {
      id
      time
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonVideoTimestampsId
    }
  }
`;
export const onCreateCertificateCourses = /* GraphQL */ `
  subscription OnCreateCertificateCourses {
    onCreateCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCertificateCourses = /* GraphQL */ `
  subscription OnUpdateCertificateCourses {
    onUpdateCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCertificateCourses = /* GraphQL */ `
  subscription OnDeleteCertificateCourses {
    onDeleteCertificateCourses {
      id
      certificateId
      courseId
      certificate {
        id
        slug
        title
        title_callout_1
        title_callout_2
        title_text
        title_button_1_text
        title_button_1_link
        title_button_2_text
        title_button_2_link
        title_image
        courses {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        whoText
        courses_total
        hours_total
        ceus_total
        brochure_link
        video
        price_full
        price_monthly
        price_features
        lmsLink
        demoLink
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateArticleRelatedCourses = /* GraphQL */ `
  subscription OnCreateArticleRelatedCourses {
    onCreateArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
          startedAt
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateArticleRelatedCourses = /* GraphQL */ `
  subscription OnUpdateArticleRelatedCourses {
    onUpdateArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
          startedAt
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteArticleRelatedCourses = /* GraphQL */ `
  subscription OnDeleteArticleRelatedCourses {
    onDeleteArticleRelatedCourses {
      id
      courseId
      articleId
      course {
        id
        slug
        category
        title
        subhead
        media
        video
        hour
        lessons
        videos
        price
        articles {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        certificate {
          items {
            id
            certificateId
            courseId
            certificate {
              id
              slug
              title
              title_callout_1
              title_callout_2
              title_text
              title_button_1_text
              title_button_1_link
              title_button_2_text
              title_button_2_link
              title_image
              courses {
                nextToken
                startedAt
              }
              whoText
              courses_total
              hours_total
              ceus_total
              brochure_link
              video
              price_full
              price_monthly
              price_features
              lmsLink
              demoLink
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          items {
            id
            tag
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lessonTagsId
            blogTagsId
            articleTagsId
          }
          nextToken
          startedAt
        }
        relatedCourses {
          items {
            id
            courseId
            articleId
            course {
              id
              slug
              category
              title
              subhead
              media
              video
              hour
              lessons
              videos
              price
              articles {
                nextToken
                startedAt
              }
              certificate {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            article {
              id
              slug
              title
              subhead
              media
              seoImage
              content
              tags {
                nextToken
                startedAt
              }
              relatedCourses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAPSUser = /* GraphQL */ `
  subscription OnCreateAPSUser {
    onCreateAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAPSUser = /* GraphQL */ `
  subscription OnUpdateAPSUser {
    onUpdateAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAPSUser = /* GraphQL */ `
  subscription OnDeleteAPSUser {
    onDeleteAPSUser {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        picture
        linkedin
        companyID
        apss {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        cmpmFormID
        cmpmForm {
          id
          user {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          firstName
          lastName
          email
          phone
          streetAddress
          addressExtra
          city
          state
          country
          companyName
          companyTitle
          linkedin
          background
          whyPackaging
          areaOfInterest
          sessionApplying
          referral
          payment
          yearGoals
          cmpmGoals
          moreAboutYou
          createdOn
          updatedOn
          _version
          _deleted
          _lastChangedAt
          cMPMFormUserId
        }
        instructorId {
          id
          userId
          instructor {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          coursesTaught {
            items {
              id
              lMSCourseId
              instructorId
              lMSCourse {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              instructor {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        studentId {
          id
          studentId
          student {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          courseEnrolled {
            items {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInstructorIdId
        userStudentIdId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAPSSponsor = /* GraphQL */ `
  subscription OnCreateAPSSponsor {
    onCreateAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAPSSponsor = /* GraphQL */ `
  subscription OnUpdateAPSSponsor {
    onUpdateAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAPSSponsor = /* GraphQL */ `
  subscription OnDeleteAPSSponsor {
    onDeleteAPSSponsor {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          items {
            id
            aPSId
            userId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Sponsors {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Speakers {
          items {
            firstName
            lastName
            email
            company
            title
            phone
            linkedin
            bio
            presentationTitle
            presentationSummary
            headshot
            mediaConsent
            privacyConsent
            apsHistory {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            aPSSpeakersId
          }
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          items {
            id
            name
            title
            company
            email
            office
            cell
            picture
            linkedin
            companyID
            apss {
              items {
                id
                aPSId
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            cmpmFormID
            cmpmForm {
              id
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              firstName
              lastName
              email
              phone
              streetAddress
              addressExtra
              city
              state
              country
              companyName
              companyTitle
              linkedin
              background
              whyPackaging
              areaOfInterest
              sessionApplying
              referral
              payment
              yearGoals
              cmpmGoals
              moreAboutYou
              createdOn
              updatedOn
              _version
              _deleted
              _lastChangedAt
              cMPMFormUserId
            }
            instructorId {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            studentId {
              id
              studentId
              student {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              courseEnrolled {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          items {
            id
            aPSId
            companyId
            aPS {
              id
              Registrants {
                nextToken
                startedAt
              }
              Sponsors {
                nextToken
                startedAt
              }
              Speakers {
                nextToken
                startedAt
              }
              year
              codes {
                code
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            company {
              id
              name
              Employees {
                nextToken
                startedAt
              }
              website
              email
              phone
              street_1
              street_2
              city
              state
              zip
              apsID {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCirriculumCourses = /* GraphQL */ `
  subscription OnCreateCirriculumCourses {
    onCreateCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCirriculumCourses = /* GraphQL */ `
  subscription OnUpdateCirriculumCourses {
    onUpdateCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCirriculumCourses = /* GraphQL */ `
  subscription OnDeleteCirriculumCourses {
    onDeleteCirriculumCourses {
      id
      lMSCirriculumId
      lMSCourseId
      lMSCirriculum {
        id
        title
        Courses {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCourseLessons = /* GraphQL */ `
  subscription OnCreateCourseLessons {
    onCreateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCourseLessons = /* GraphQL */ `
  subscription OnUpdateCourseLessons {
    onUpdateCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCourseLessons = /* GraphQL */ `
  subscription OnDeleteCourseLessons {
    onDeleteCourseLessons {
      id
      lMSCourseId
      lMSLessonId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      lMSLesson {
        id
        title
        Course {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        subheadline
        objectives {
          items {
            id
            objective
            completed
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonObjectivesId
          }
          nextToken
          startedAt
        }
        mediaType
        slides {
          items {
            id
            slideSource
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonSlidesId
          }
          nextToken
          startedAt
        }
        video {
          id
          timestamps {
            items {
              id
              time
              description
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lessonVideoTimestampsId
            }
            nextToken
            startedAt
          }
          lessonId
          lesson {
            id
            title
            Course {
              items {
                id
                lMSCourseId
                lMSLessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            subheadline
            objectives {
              items {
                id
                objective
                completed
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonObjectivesId
              }
              nextToken
              startedAt
            }
            mediaType
            slides {
              items {
                id
                slideSource
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonSlidesId
              }
              nextToken
              startedAt
            }
            video {
              id
              timestamps {
                nextToken
                startedAt
              }
              lessonId
              lesson {
                id
                title
                subheadline
                mediaType
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                lMSLessonVideoId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            percentComplete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            lMSLessonVideoId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lMSLessonVideoId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCourseInstructors = /* GraphQL */ `
  subscription OnCreateCourseInstructors {
    onCreateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCourseInstructors = /* GraphQL */ `
  subscription OnUpdateCourseInstructors {
    onUpdateCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCourseInstructors = /* GraphQL */ `
  subscription OnDeleteCourseInstructors {
    onDeleteCourseInstructors {
      id
      lMSCourseId
      instructorId
      lMSCourse {
        id
        courseId
        Cirriculum {
          items {
            id
            lMSCirriculumId
            lMSCourseId
            lMSCirriculum {
              id
              title
              Courses {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Lessons {
          items {
            id
            lMSCourseId
            lMSLessonId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            lMSLesson {
              id
              title
              Course {
                nextToken
                startedAt
              }
              subheadline
              objectives {
                nextToken
                startedAt
              }
              mediaType
              slides {
                nextToken
                startedAt
              }
              video {
                id
                lessonId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              lMSLessonVideoId
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        Instructors {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        price
        hours
        videos
        seoImage
        description
        percentComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentCourseEnrolledId
      }
      instructor {
        id
        userId
        instructor {
          id
          name
          title
          company
          email
          office
          cell
          picture
          linkedin
          companyID
          apss {
            items {
              id
              aPSId
              userId
              aPS {
                id
                year
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              user {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          cmpmFormID
          cmpmForm {
            id
            user {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            firstName
            lastName
            email
            phone
            streetAddress
            addressExtra
            city
            state
            country
            companyName
            companyTitle
            linkedin
            background
            whyPackaging
            areaOfInterest
            sessionApplying
            referral
            payment
            yearGoals
            cmpmGoals
            moreAboutYou
            createdOn
            updatedOn
            _version
            _deleted
            _lastChangedAt
            cMPMFormUserId
          }
          instructorId {
            id
            userId
            instructor {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            coursesTaught {
              items {
                id
                lMSCourseId
                instructorId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          studentId {
            id
            studentId
            student {
              id
              name
              title
              company
              email
              office
              cell
              picture
              linkedin
              companyID
              apss {
                nextToken
                startedAt
              }
              cmpmFormID
              cmpmForm {
                id
                firstName
                lastName
                email
                phone
                streetAddress
                addressExtra
                city
                state
                country
                companyName
                companyTitle
                linkedin
                background
                whyPackaging
                areaOfInterest
                sessionApplying
                referral
                payment
                yearGoals
                cmpmGoals
                moreAboutYou
                createdOn
                updatedOn
                _version
                _deleted
                _lastChangedAt
                cMPMFormUserId
              }
              instructorId {
                id
                userId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              studentId {
                id
                studentId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              userInstructorIdId
              userStudentIdId
            }
            courseEnrolled {
              items {
                id
                courseId
                price
                hours
                videos
                seoImage
                description
                percentComplete
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                studentCourseEnrolledId
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInstructorIdId
          userStudentIdId
        }
        coursesTaught {
          items {
            id
            lMSCourseId
            instructorId
            lMSCourse {
              id
              courseId
              Cirriculum {
                nextToken
                startedAt
              }
              Lessons {
                nextToken
                startedAt
              }
              Instructors {
                nextToken
                startedAt
              }
              price
              hours
              videos
              seoImage
              description
              percentComplete
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              studentCourseEnrolledId
            }
            instructor {
              id
              userId
              instructor {
                id
                name
                title
                company
                email
                office
                cell
                picture
                linkedin
                companyID
                cmpmFormID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                userInstructorIdId
                userStudentIdId
              }
              coursesTaught {
                nextToken
                startedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
