<template>
  <div class="create-post">
    <BlogCoverPreview v-show="this.activePreview" @close-preview="closePreview"
                      :blog-cover-photo="this.blogData.fileUrl"/>
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" ref="title" placeholder="Enter Blog Title" v-model="blogData.blogTitle"/>
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange"
                 accept=".png, .jpg, ,jpeg"/>
          <button @click="openPreview" type="button"
                  :class="['preview', {'button-inactive': !this.blogData.fileUrl}]">
            Preview Photo
          </button>
          <span>File Chosen: {{ this.fileName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor :editorOptions="editorSettings" v-model="blogData.blogHTML" useCustomImageHandler/>
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
        <button class="router-button" @click="handleNavigateBlogPreview">
          Post Preview
        </button>
      </div>
    </div>
  </div>

</template>

<script>

import "firebase/storage";
import Quill from "quill";
import BlogCoverPreview from "@/components/BlogCoverPreview.vue";
import {generateRandomId} from "../../ultis/sharedFunc";
import {mapActions} from "vuex";

window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data() {
    return {
      activePreview: false,
      fileName: '',
      error: null,
      errorMsg: null,
      loading: null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
      blogData: {
        id: '',
        blogTitle: '',
        blogHTML: '',
        fileUrl: '',
        blogDate: ''
      },
    };
  },
  components: {BlogCoverPreview},
  methods: {
    ...mapActions('blog', ['addBlog']),
    fileChange() {
      const file = this.$refs.blogPhoto.files[0]
      this.fileName = file.name
      this.blogData.fileUrl = URL.createObjectURL(file)
    },
    openPreview() {
      this.activePreview = true
    },
    closePreview() {
      this.activePreview = false
    },
    handleNavigateBlogPreview() {
      this.$router.push({
        name: 'BlogPreview',
        params: {
          data: this.blogData,
        }
      });
    },

    uploadBlog() {
      this.blogData.blogDate = new Date()
      this.blogData.id = generateRandomId(6)
      this.addBlog(this.blogData)
      this.$router.push('/')
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.create-post {
  position: relative;
  height: 100%;

  button {
    margin-top: 0;
  }

  .router-button {
    text-decoration: none;
    color: #fff;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;

    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }

  // error styling
  .invisible {
    opacity: 0 !important;
  }

  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }

  .blog-info {
    display: flex;
    margin-bottom: 32px;

    input:nth-child(1) {
      min-width: 300px;
    }

    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;

      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #303030;
      }
    }

    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;

      input {
        display: none;
      }

      .preview {
        margin-left: 16px;
        text-transform: initial;
      }

      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }

    .ql-editor {
      padding: 20px 16px 30px;
    }
  }

  .blog-actions {
    margin-top: 32px;

    button {
      margin-right: 16px;
    }
  }

  .button-inactive {
    pointer-events: none !important;
    cursor: none !important;
    background-color: rgba(128, 128, 128, 0.5) !important;
  }
}
</style>