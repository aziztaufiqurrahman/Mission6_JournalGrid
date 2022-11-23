<!-- <template>
  <div id="signup">
    <div class="mainbox">
        <div class="title">Sign Up</div>
        <template v-if="user==null">
            <div class="inner-addon left-addon mb-3 ">
                <i class="fas fa-at"></i>      
                <input type="text" class="input" @blur="$v.email.$touch()" :class="{'is-invalid' : $v.email.$error}" v-model="$v.email.$model" placeholder="E-mail" />
            </div>
            <div class="inner-addon left-addon mb-3 ">
                <i class="fas fa-user"></i>      
                <input type="text" class="input" v-model="displayName" placeholder="Full Name" />
            </div>
            <div class="inner-addon left-addon ">
                <i class="fas fa-unlock"></i>      
                <input type="password" class="input" @blur="$v.password.$touch()" :class="{'is-invalid' : $v.password.$error}" v-model="$v.password.$model" placeholder="Password" />
            </div>
            <div class="col-auto mt-3 p-0 text-center">
                <button @click="register" class="btn btn-3">Sign Up</button>
            </div>
        </template>
        <div v-else class="text-center">
            <!-- asd@asd.com -->
            <p>Your user has been successfully created.</p>
            <p>Now, you logged automatically.</p>
            <router-link to="/profile" class="btn btn-3 mt-5">Go to Profile</router-link>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<style scoped>
    .title {margin-bottom:30px;}
</style> -->