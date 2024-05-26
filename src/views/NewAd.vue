<script setup>
    import { ref } from 'vue';
    import DataService from "../services/dataservice"
    import { useRouter } from 'vue-router';

    const kategoriak = ref([])
    const datum = new Date.toISOString().substring(0, 10)
    const kategoriaId = ref()
    const leiras = ref("")
    const tehermentes = ref(true)
    const fenykepUrl = ref("")
    const errorMsg = ref("Hibás üzenet!")
    const errorShow = ref(false)

    const router = useRouter()

    DataService.getKategoriak()
    .then((resp) => {
      kategoriak.value = resp;
      console.log(kategoriak.value);
    })
    .catch((err) => {
      console.log(err);
    });

    const ujHirdetes = () => {
        const ujIngatlan = ref({
            kategoriaId: kategoriaId.value,
            leiras: leiras.value,
            hirdetesDatuma: datum,
            tehermentes: tehermentes.value,
            kepUrl: fenykepUrl.value
    })
        DataService.saveIngatlan(ujIngatlan)
        .then((resp) => {
            errorShow.value = false
            router.push("/offers")
        })
        .catch((err) => {
            errorShow.value = true
            console.log(err)
            errorMsg.value = err.message
        })
    }
</script>

<template>
    <div class="container">
        <h2 class="mb-4 text-center">Új hirdetés elküldése</h2>
        <div class="row">
            <div class="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
                <div class="mb-3">
                    <label for="category" class="form-label">Ingatlan kategóriája</label>
                    <select v-model="kategoriaId" class="form-select" name="kategoriaId">
                        <option value="0">Kérem válasszon</option>
                        <option :value="kategoria.id" v-for="kategoria in kategoriak">{{ kategoria.megnevezes }}</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="date" class="form-label">Hirdetés dátuma</label>
                    <input disabled v-model="datum" type="date" class="form-control" name="hirdetesDatuma">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Ingatlan leírása</label>
                    <textarea v-model="leiras" class="form-control" name="leiras" rows="3"></textarea>
                </div>
                <div class="form-check mb-3">
                    <input v-model="tehermentes" class="form-check-input" type="checkbox" name="tehermentes" checked>
                    <label class="form-check-label" for="creditFree">Tehermentes ingatlan</label>
                </div>
                <div class="mb-3">
                    <label for="pictureUrl" class="form-label">Fénykép az ingatlanról</label>
                    <input v-model="fenykepUrl" type="url" class="form-control" name="kepUrl">
                </div>
                <div class="mb-3 text-center">
                    <button @click="ujHirdetes" class="btn btn-primary px-5">Küldés</button>
                </div>

                <div class="alert alert-danger alert-dismissible" role="alert" v-if="errorShow">
                    <strong>{{ errorMsg }}</strong>
                    <button type="button" class="btn-close" @click="errorShow.value = false"></button>
                </div>

            </div>
        </div>
    </div>
</template>