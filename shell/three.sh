if [ "${HOST}" = "http://rid-safedelete-service-stgrc-443-rid-nonprod-esd-membership.jpe2-caas1-prod1.caas.jpe2b.r-local.net" ]; then 
    HOST="${HOST%%-443*}"
    HOST="${HOST##http://}"
    echo "${HOST}"
elif [ "${HOST}" = "http://rid-safedeletegdpr-stgrc-443-rid-nonprod-esd-membership.jpe2-caas1-prod1.caas.jpe2b.r-local.net" ]; then 
    HOST="${HOST%%-stgrc-443*}"
    HOST="${HOST##http://}"
    HOST="${HOST}""-service-stgrc"
    echo "${HOST}"
else
    HOST="${HOST%%-8080*}"
    HOST="${HOST##http://}"
    echo "${HOST}"
fi
