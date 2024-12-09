import Input from "./Input";
import Select from "./Select";
import "./create.scss";
import { statusOptions, typeOptions } from "../../utils/constants";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/slices/jobSlice";
import Input from "../../pages/create/Input";

const Create = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    jobData.date = Date.now();

    api
      .post("/jobs", jobData)
      .then((res) => {
        dispatch(createJob(res.data));
        toast.success("Application created");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Reference creation failed");
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Add New Job</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" />
          <Input label="Şirket" name="company" />
          <Input label="Lokasyon" name="location" />
          <Select label="Durum" name="status" options={statusOptions} />
          <Select label="Tür" name="type" options={typeOptions} />

          <div className="btn-wrapper">
            <button class="button">Create</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
