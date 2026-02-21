import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="Contact" />

      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-8 md:gap-12 
        mt-8 md:mt-10
      ">

        {/* LEFT SIDE - Contact Info */}
        <div className="space-y-6 md:space-y-8">

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1f1f23] rounded-xl flex items-center justify-center">
              <Mail className="text-yellow-400" size={18} />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">EMAIL</p>
              <p className="text-white text-sm sm:text-base">
                sseffort@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1f1f23] rounded-xl flex items-center justify-center">
              <Phone className="text-yellow-400" size={18} />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">PHONE</p>
              <p className="text-white text-sm sm:text-base">
                +91 7317303692
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1f1f23] rounded-xl flex items-center justify-center">
              <MapPin className="text-yellow-400" size={18} />
            </div>
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">LOCATION</p>
              <p className="text-white text-sm sm:text-base">
                Chandigarh, India
              </p>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden border border-gray-700">
            <iframe
              title="Chandigarh Location"
              src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
              className="w-full h-48 sm:h-56 md:h-64"
              loading="lazy"
            />
          </div>

        </div>

        {/* RIGHT SIDE - Form */}
        <div className="bg-[#1f1f23] p-5 sm:p-8 rounded-2xl border border-gray-700/50">
          <form className="space-y-5 sm:space-y-6">

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 bg-[#141417] p-3 rounded-xl border border-gray-700 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 bg-[#141417] p-3 rounded-xl border border-gray-700 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-2 bg-[#141417] p-3 rounded-xl border border-gray-700 focus:outline-none focus:border-yellow-400 text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:opacity-90 transition text-sm sm:text-base"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;